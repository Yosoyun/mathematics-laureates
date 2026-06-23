import { z } from "zod";

export const completenessStatusSchema = z.enum([
  "verified-complete",
  "substantially-complete",
  "in-progress",
  "requires-verification",
]);

export const sourceTypeSchema = z.enum([
  "official-award",
  "institution",
  "personal-page",
  "paper",
  "book",
  "database",
  "reference",
  "news",
  "archive",
]);

export const sourceSchema = z.object({
  id: z.string().min(2),
  title: z.string().min(3),
  publisher: z.string().optional(),
  url: z.url(),
  type: sourceTypeSchema,
  accessedDate: z.iso.date(),
  publicationDate: z.string().optional(),
  doi: z.string().optional(),
  notes: z.string().optional(),
});

export const placeSchema = z.object({
  name: z.string().min(1),
  countryOrRegion: z.string().optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  sourceIds: z.array(z.string()).optional(),
});

export const institutionAffiliationSchema = z.object({
  institutionId: z.string(),
  name: z.string().min(2),
  role: z.string().optional(),
  countryOrRegion: z.string().optional(),
  startYear: z.number().int().optional(),
  endYear: z.number().int().optional(),
  current: z.boolean().optional(),
  sourceIds: z.array(z.string()).min(1),
});

export const prizeValueSchema = z.object({
  amount: z.number().positive().optional(),
  currency: z.string().optional(),
  referenceYear: z.number().int().optional(),
  note: z.string().optional(),
  sourceIds: z.array(z.string()).min(1),
});

export const winnerCoverageSchema = z.object({
  earliestYear: z.number().int().min(1800).max(2100).optional(),
  latestYear: z.number().int().min(1800).max(2100).optional(),
  missingYears: z.array(z.number().int().min(1800).max(2100)).default([]),
  nonAwardedYears: z.array(z.number().int().min(1800).max(2100)).default([]),
  coverageNote: z.string().min(40),
  sourceIds: z.array(z.string()).min(1),
  lastVerified: z.iso.date(),
});

export const awardSchema = z.object({
  id: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(2),
  shortName: z.string().optional(),
  categories: z.array(z.string()).min(1),
  organisation: z.string().min(2),
  countryOrRegion: z.string().optional(),
  establishedYear: z.number().int().min(1800).max(2100),
  frequency: z.string().min(3),
  eligibility: z.string().min(3),
  ageLimit: z.string().optional(),
  prizeValue: prizeValueSchema.optional(),
  description: z.string().min(80),
  history: z.string().min(80),
  selectionProcess: z.string().optional(),
  officialUrl: z.url(),
  sourceIds: z.array(z.string()).min(1),
  completenessStatus: completenessStatusSchema,
  winnerListStatus: completenessStatusSchema,
  winnerCoverage: winnerCoverageSchema,
  lastVerified: z.iso.date(),
});

export const researchFieldSchema = z.object({
  id: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(2),
  parentFieldId: z.string().optional(),
  summary: z.string().min(80),
  prerequisites: z.array(z.string()).optional(),
  relatedFieldIds: z.array(z.string()).optional(),
  sourceIds: z.array(z.string()).min(1),
});

export const winnerRecordSchema = z.object({
  id: z.string().min(3),
  awardId: z.string(),
  year: z.number().int().min(1800).max(2100),
  recipientNames: z.array(z.string().min(2)).min(1),
  laureateIds: z.array(z.string()).optional(),
  citation: z.string().optional(),
  officialCitationUrl: z.url().optional(),
  sourceIds: z.array(z.string()).min(1),
  completenessStatus: completenessStatusSchema,
  notes: z.string().optional(),
});

export const contributionExplanationSchema = z.object({
  title: z.string().min(3),
  plain: z.string().min(80),
  student: z.string().min(80),
  advanced: z.string().min(80),
  prerequisites: z.array(z.string()).min(1),
});

export const laureateAwardSchema = z.object({
  awardId: z.string(),
  year: z.number().int().min(1800).max(2100),
  citation: z.string().optional(),
  coRecipientIds: z.array(z.string()).optional(),
  officialCitationUrl: z.url().optional(),
  sourceIds: z.array(z.string()).min(1),
});

export const laureateSchema = z.object({
  id: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  fullName: z.string().min(2),
  alternateNames: z.array(z.string()).optional(),
  birthDate: z.string().optional(),
  deathDate: z.string().optional(),
  birthPlace: placeSchema.optional(),
  nationalAffiliations: z.array(z.string()).optional(),
  institutions: z.array(institutionAffiliationSchema).optional(),
  researchFieldIds: z.array(z.string()).min(1),
  biography: z.string().min(140),
  education: z.array(z.string()).optional(),
  majorContributions: z.array(z.string()).min(1),
  explanation: contributionExplanationSchema,
  publications: z.array(z.string()).optional(),
  awardRecords: z.array(laureateAwardSchema).min(1),
  sourceIds: z.array(z.string()).min(1),
  completenessStatus: completenessStatusSchema,
  lastVerified: z.iso.date(),
});

export const catalogSchema = z.object({
  sources: z.array(sourceSchema).min(1),
  awards: z.array(awardSchema).min(23),
  fields: z.array(researchFieldSchema).min(15),
  winnerRecords: z.array(winnerRecordSchema).min(23),
  laureates: z.array(laureateSchema).min(40),
});

export type CompletenessStatus = z.infer<typeof completenessStatusSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type WinnerCoverage = z.infer<typeof winnerCoverageSchema>;
export type Award = z.infer<typeof awardSchema>;
export type ResearchField = z.infer<typeof researchFieldSchema>;
export type WinnerRecord = z.infer<typeof winnerRecordSchema>;
export type Laureate = z.infer<typeof laureateSchema>;
export type Catalog = z.infer<typeof catalogSchema>;
