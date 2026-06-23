import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { awards, fields, laureates, winnerRecords } from "../src/lib/catalog";

const entries = [
  ...awards.map((award) => ({
    type: "award",
    title: award.name,
    url: `/awards/${award.slug}`,
    text: [
      award.shortName,
      award.organisation,
      award.countryOrRegion,
      award.description,
      award.history,
      award.categories.join(" "),
    ].join(" "),
  })),
  ...laureates.map((laureate) => ({
    type: "laureate",
    title: laureate.fullName,
    url: `/laureates/${laureate.slug}`,
    text: [
      laureate.biography,
      laureate.majorContributions.join(" "),
      laureate.researchFieldIds.join(" "),
    ].join(" "),
  })),
  ...fields.map((field) => ({
    type: "field",
    title: field.name,
    url: `/fields/${field.slug}`,
    text: [
      field.summary,
      field.prerequisites?.join(" "),
      field.relatedFieldIds?.join(" "),
    ].join(" "),
  })),
  ...winnerRecords.map((record) => ({
    type: "winner",
    title: `${record.year} ${record.recipientNames.join(", ")}`,
    url: `/awards/${awards.find((award) => award.id === record.awardId)?.slug ?? ""}`,
    text: [record.recipientNames.join(" "), record.citation, record.notes].join(
      " ",
    ),
  })),
];

const outputPath = join(process.cwd(), "public", "search-index.json");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(entries, null, 2)}\n`);
console.log(
  `Wrote ${entries.length} search entries to public/search-index.json`,
);
