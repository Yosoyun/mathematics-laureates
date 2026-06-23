import { catalog, validateRelationships } from "../src/lib/catalog";

const errors = validateRelationships();

const duplicateChecks: Array<[string, string[]]> = [
  ["source ids", catalog.sources.map((item) => item.id)],
  ["award ids", catalog.awards.map((item) => item.id)],
  ["award slugs", catalog.awards.map((item) => item.slug)],
  ["field ids", catalog.fields.map((item) => item.id)],
  ["field slugs", catalog.fields.map((item) => item.slug)],
  ["winner record ids", catalog.winnerRecords.map((item) => item.id)],
  ["laureate ids", catalog.laureates.map((item) => item.id)],
  ["laureate slugs", catalog.laureates.map((item) => item.slug)],
];

for (const [label, values] of duplicateChecks) {
  for (const duplicate of findDuplicates(values)) {
    errors.push(`Duplicate ${label}: ${duplicate}`);
  }
}

const requiredAwardIds = [
  "fields-medal",
  "abel-prize",
  "wolf-prize-mathematics",
  "chern-medal",
  "breakthrough-prize-mathematics",
  "bocher-memorial-prize",
  "cole-prize-algebra",
  "cole-prize-number-theory",
  "steele-lifetime",
  "steele-exposition",
  "steele-research",
  "imu-abacus-medal",
  "ramanujan-prize",
  "sylvester-medal",
  "clay-research-award",
  "shaw-prize-mathematical-sciences",
  "ostrowski-prize",
  "fermat-prize",
  "norbert-wiener-prize",
  "balzan-prize-mathematics",
  "nemmers-prize-mathematics",
  "rousseeuw-prize-statistics",
  "international-prize-statistics",
];

for (const awardId of requiredAwardIds) {
  if (!catalog.awards.some((award) => award.id === awardId))
    errors.push(`Missing required award: ${awardId}`);
  if (!catalog.winnerRecords.some((record) => record.awardId === awardId))
    errors.push(`Missing winner dataset for award: ${awardId}`);
}

for (const award of catalog.awards) {
  const records = catalog.winnerRecords.filter(
    (record) => record.awardId === award.id,
  );
  if (!award.winnerCoverage) {
    errors.push(`Missing winner coverage audit for award: ${award.id}`);
    continue;
  }
  if (records.length > 0) {
    const years = records.map((record) => record.year);
    const earliest = Math.min(...years);
    const latest = Math.max(...years);
    if (award.winnerCoverage.earliestYear !== earliest) {
      errors.push(
        `Coverage earliest year mismatch for ${award.id}: expected ${earliest}, found ${award.winnerCoverage.earliestYear}`,
      );
    }
    if (award.winnerCoverage.latestYear !== latest) {
      errors.push(
        `Coverage latest year mismatch for ${award.id}: expected ${latest}, found ${award.winnerCoverage.latestYear}`,
      );
    }
  }
  if (
    award.winnerListStatus === "verified-complete" &&
    award.winnerCoverage.missingYears.length > 0
  ) {
    errors.push(
      `Award ${award.id} is verified-complete but still has missing winner years`,
    );
  }
  if (
    award.winnerListStatus === "verified-complete" &&
    records.some((record) => record.completenessStatus !== "verified-complete")
  ) {
    errors.push(
      `Award ${award.id} is verified-complete but has non-verified winner records`,
    );
  }
}

for (const record of catalog.winnerRecords) {
  if (!record.officialCitationUrl) {
    errors.push(
      `Winner record ${record.id} is missing an official citation URL`,
    );
  }
  if (record.recipientNames.length === 0) {
    errors.push(`Winner record ${record.id} has no recipient names`);
  }
}

const detailedLaureates = catalog.laureates.filter((laureate) => {
  return (
    laureate.biography.length >= 260 &&
    (laureate.education?.length ?? 0) > 0 &&
    (laureate.publications?.length ?? 0) > 0 &&
    laureate.explanation.plain.length >= 140 &&
    laureate.explanation.student.length >= 140 &&
    laureate.explanation.advanced.length >= 140
  );
});

if (detailedLaureates.length < 40) {
  errors.push(
    `Expected at least 40 detailed laureate profiles, found ${detailedLaureates.length}`,
  );
}

const prohibitedProfilePhrases = [
  "represented in this archive through verified award records",
  "At a general level, this contribution matters",
  "A student approaching this area should first build comfort",
  "For a research reader, the contribution should be read",
];

for (const laureate of catalog.laureates) {
  for (const phrase of prohibitedProfilePhrases) {
    if (
      laureate.biography.includes(phrase) ||
      laureate.explanation.plain.includes(phrase) ||
      laureate.explanation.student.includes(phrase) ||
      laureate.explanation.advanced.includes(phrase)
    ) {
      errors.push(`Generic placeholder phrase found in ${laureate.id}`);
    }
  }
}

for (const duplicate of findDuplicates(
  catalog.laureates.map((laureate) => laureate.biography.slice(0, 120)),
)) {
  errors.push(`Duplicate biography opening detected: ${duplicate}`);
}

if (errors.length > 0) {
  console.error("Data validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${catalog.awards.length} awards, ${catalog.winnerRecords.length} audited winner records, ${detailedLaureates.length} detailed laureate profiles, and ${catalog.sources.length} sources.`,
);

function findDuplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}
