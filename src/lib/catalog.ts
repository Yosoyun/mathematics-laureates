import {
  awards,
  catalog,
  fields,
  laureates,
  parseCatalog,
  sources,
  winnerRecords,
} from "@data/catalog";
import type {
  Award,
  Catalog,
  Laureate,
  ResearchField,
  Source,
  WinnerRecord,
} from "@data/schema";

export {
  awards,
  catalog,
  fields,
  laureates,
  parseCatalog,
  sources,
  winnerRecords,
};
export type { Award, Catalog, Laureate, ResearchField, Source, WinnerRecord };

export function bySlug<T extends { slug: string }>(
  items: T[],
  slug: string,
): T | undefined {
  return items.find((item) => item.slug === slug);
}

export function sourceMap(): Map<string, Source> {
  return new Map(sources.map((source) => [source.id, source]));
}

export function awardMap(): Map<string, Award> {
  return new Map(awards.map((award) => [award.id, award]));
}

export function fieldMap(): Map<string, ResearchField> {
  return new Map(fields.map((field) => [field.id, field]));
}

export function laureateMap(): Map<string, Laureate> {
  return new Map(laureates.map((laureate) => [laureate.id, laureate]));
}

export function winnersForAward(awardId: string): WinnerRecord[] {
  return winnerRecords
    .filter((record) => record.awardId === awardId)
    .sort((a, b) => b.year - a.year);
}

export function laureatesForAward(awardId: string): Laureate[] {
  return laureates
    .filter((laureate) =>
      laureate.awardRecords.some((record) => record.awardId === awardId),
    )
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

export function laureatesForField(fieldId: string): Laureate[] {
  return laureates
    .filter((laureate) => laureate.researchFieldIds.includes(fieldId))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

export function awardsForField(fieldId: string): Award[] {
  const matchingAwardIds = new Set(
    laureates
      .filter((laureate) => laureate.researchFieldIds.includes(fieldId))
      .flatMap((laureate) =>
        laureate.awardRecords.map((record) => record.awardId),
      ),
  );
  return awards.filter((award) => matchingAwardIds.has(award.id));
}

export function relatedLaureates(laureate: Laureate, limit = 6): Laureate[] {
  const fieldSet = new Set(laureate.researchFieldIds);
  return laureates
    .filter((candidate) => candidate.id !== laureate.id)
    .map((candidate) => ({
      candidate,
      score: candidate.researchFieldIds.filter((fieldId) =>
        fieldSet.has(fieldId),
      ).length,
    }))
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.candidate.fullName.localeCompare(b.candidate.fullName),
    )
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function validateRelationships(): string[] {
  const errors: string[] = [];
  const parsed = parseCatalog();
  const sourceIds = new Set(parsed.sources.map((source) => source.id));
  const awardSlugs = new Set<string>();
  const fieldIds = new Set(parsed.fields.map((field) => field.id));
  const laureateIds = new Set(parsed.laureates.map((laureate) => laureate.id));
  const laureateSlugs = new Set<string>();

  for (const award of parsed.awards) {
    if (awardSlugs.has(award.slug))
      errors.push(`Duplicate award slug: ${award.slug}`);
    awardSlugs.add(award.slug);
    checkSourceIds(`award ${award.id}`, award.sourceIds, sourceIds, errors);
    checkSourceIds(
      `award ${award.id} prize value`,
      award.prizeValue?.sourceIds ?? [],
      sourceIds,
      errors,
    );
    checkSourceIds(
      `award ${award.id} winner coverage`,
      award.winnerCoverage.sourceIds,
      sourceIds,
      errors,
    );
  }

  for (const field of parsed.fields) {
    checkSourceIds(`field ${field.id}`, field.sourceIds, sourceIds, errors);
    if (field.parentFieldId && !fieldIds.has(field.parentFieldId))
      errors.push(`Unknown parent field ${field.parentFieldId}`);
    for (const relatedId of field.relatedFieldIds ?? []) {
      if (!fieldIds.has(relatedId))
        errors.push(`Unknown related field ${relatedId} in ${field.id}`);
    }
  }

  for (const winner of parsed.winnerRecords) {
    const award = parsed.awards.find((item) => item.id === winner.awardId);
    if (!award) {
      errors.push(
        `Unknown award ${winner.awardId} in winner record ${winner.id}`,
      );
    } else if (winner.year < award.establishedYear) {
      errors.push(
        `Winner record ${winner.id} predates award establishment year ${award.establishedYear}`,
      );
    }
    checkSourceIds(
      `winner record ${winner.id}`,
      winner.sourceIds,
      sourceIds,
      errors,
    );
    for (const laureateId of winner.laureateIds ?? []) {
      if (!laureateIds.has(laureateId))
        errors.push(
          `Unknown laureate ${laureateId} in winner record ${winner.id}`,
        );
    }
  }

  for (const laureate of parsed.laureates) {
    if (laureateSlugs.has(laureate.slug))
      errors.push(`Duplicate laureate slug: ${laureate.slug}`);
    laureateSlugs.add(laureate.slug);
    checkSourceIds(
      `laureate ${laureate.id}`,
      laureate.sourceIds,
      sourceIds,
      errors,
    );
    for (const fieldId of laureate.researchFieldIds) {
      if (!fieldIds.has(fieldId))
        errors.push(`Unknown field ${fieldId} in laureate ${laureate.id}`);
    }
    for (const record of laureate.awardRecords) {
      const award = parsed.awards.find((item) => item.id === record.awardId);
      if (!award) {
        errors.push(
          `Unknown award ${record.awardId} in laureate ${laureate.id}`,
        );
      } else if (record.year < award.establishedYear) {
        errors.push(
          `Laureate ${laureate.id} has ${record.awardId} year ${record.year} before establishment ${award.establishedYear}`,
        );
      }
      checkSourceIds(
        `laureate award ${laureate.id}/${record.awardId}`,
        record.sourceIds,
        sourceIds,
        errors,
      );
      for (const coRecipientId of record.coRecipientIds ?? []) {
        if (coRecipientId === laureate.id)
          errors.push(`Self-referential co-recipient on ${laureate.id}`);
        if (!laureateIds.has(coRecipientId))
          errors.push(
            `Unknown co-recipient ${coRecipientId} in ${laureate.id}`,
          );
      }
    }
  }

  return errors;
}

function checkSourceIds(
  label: string,
  ids: string[],
  knownSourceIds: Set<string>,
  errors: string[],
): void {
  for (const id of ids) {
    if (!knownSourceIds.has(id))
      errors.push(`Unknown source ${id} in ${label}`);
  }
}
