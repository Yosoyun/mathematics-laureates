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

if (catalog.laureates.length < 40) {
  errors.push(
    `Expected at least 40 laureate profiles, found ${catalog.laureates.length}`,
  );
}

if (errors.length > 0) {
  console.error("Data validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${catalog.awards.length} awards, ${catalog.winnerRecords.length} winner records, ${catalog.laureates.length} laureate profiles, and ${catalog.sources.length} sources.`,
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
