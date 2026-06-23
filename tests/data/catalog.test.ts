import { describe, expect, it } from "vitest";
import {
  awards,
  fields,
  laureates,
  validateRelationships,
  winnerRecords,
} from "../../src/lib/catalog";

describe("catalog", () => {
  it("contains the required first-release coverage", () => {
    expect(awards).toHaveLength(23);
    expect(fields.length).toBeGreaterThanOrEqual(15);
    expect(laureates.length).toBeGreaterThanOrEqual(40);
  });

  it("has a winner dataset for every award", () => {
    for (const award of awards) {
      expect(
        winnerRecords.some((record) => record.awardId === award.id),
        award.name,
      ).toBe(true);
      expect(
        award.winnerCoverage.coverageNote.length,
        award.name,
      ).toBeGreaterThan(40);
    }
  });

  it("keeps the official source span visible for winner lists", () => {
    for (const award of awards) {
      const years = winnerRecords
        .filter((record) => record.awardId === award.id)
        .map((record) => record.year);
      expect(award.winnerCoverage.earliestYear, award.name).toBe(
        Math.min(...years),
      );
      expect(award.winnerCoverage.latestYear, award.name).toBe(
        Math.max(...years),
      );
    }
  });

  it("has no relationship validation errors", () => {
    expect(validateRelationships()).toEqual([]);
  });
});
