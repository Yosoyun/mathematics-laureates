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
    }
  });

  it("has no relationship validation errors", () => {
    expect(validateRelationships()).toEqual([]);
  });
});
