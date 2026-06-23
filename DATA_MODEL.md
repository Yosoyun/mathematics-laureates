# Canonical Data Model

Use Zod schemas and generated TypeScript types.

## Shared Types

```ts
type CompletenessStatus =
  | "verified-complete"
  | "substantially-complete"
  | "in-progress"
  | "requires-verification";

type SourceType =
  | "official-award"
  | "institution"
  | "personal-page"
  | "paper"
  | "book"
  | "database"
  | "reference"
  | "news"
  | "archive";
```

## Source

```ts
interface Source {
  id: string;
  title: string;
  publisher?: string;
  url: string;
  type: SourceType;
  accessedDate: string;
  publicationDate?: string;
  doi?: string;
  notes?: string;
}
```

## Award

```ts
interface Award {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  categories: string[];
  organisation: string;
  countryOrRegion?: string;
  establishedYear: number;
  frequency: string;
  eligibility: string;
  ageLimit?: string;
  prizeValue?: {
    amount?: number;
    currency?: string;
    referenceYear?: number;
    note?: string;
    sourceIds: string[];
  };
  description: string;
  history: string;
  selectionProcess?: string;
  officialUrl: string;
  sourceIds: string[];
  completenessStatus: CompletenessStatus;
  lastVerified: string;
}
```

## Laureate

```ts
interface Laureate {
  id: string;
  slug: string;
  fullName: string;
  alternateNames?: string[];
  birthDate?: string;
  deathDate?: string;
  birthPlace?: Place;
  nationalAffiliations?: string[];
  institutions?: InstitutionAffiliation[];
  researchFieldIds: string[];
  biography: string;
  education?: EducationRecord[];
  doctoralAdvisorIds?: string[];
  doctoralStudentIds?: string[];
  contributionIds: string[];
  publicationIds?: string[];
  awardRecords: LaureateAward[];
  quotationIds?: string[];
  portrait?: LicensedImage;
  sourceIds: string[];
  completenessStatus: CompletenessStatus;
  lastVerified: string;
}
```

## Laureate Award Record

```ts
interface LaureateAward {
  awardId: string;
  year: number;
  citation?: string;
  coRecipientIds?: string[];
  officialCitationUrl?: string;
  sourceIds: string[];
}
```

## Contribution

```ts
interface Contribution {
  id: string;
  slug: string;
  title: string;
  summary: string;
  generalExplanation: string;
  studentExplanation?: string;
  advancedExplanation?: string;
  prerequisites?: string[];
  relatedConceptIds?: string[];
  relatedFieldIds?: string[];
  sourceIds: string[];
  lastVerified: string;
}
```

## Publication

```ts
interface Publication {
  id: string;
  title: string;
  authors: string[];
  year?: number;
  journalOrPublisher?: string;
  doi?: string;
  arxivId?: string;
  url?: string;
  type: "paper" | "book" | "lecture" | "survey" | "other";
  sourceIds: string[];
}
```

## Research Field

```ts
interface ResearchField {
  id: string;
  slug: string;
  name: string;
  parentFieldId?: string;
  summary: string;
  prerequisites?: string[];
  relatedFieldIds?: string[];
  sourceIds: string[];
}
```

## Institution Affiliation

```ts
interface InstitutionAffiliation {
  institutionId: string;
  role?: string;
  startYear?: number;
  endYear?: number;
  current?: boolean;
  sourceIds: string[];
}
```

## Place

```ts
interface Place {
  name: string;
  countryOrRegion?: string;
  latitude?: number;
  longitude?: number;
  sourceIds?: string[];
}
```

## Licensed Image

```ts
interface LicensedImage {
  src: string;
  alt: string;
  creator?: string;
  licence: string;
  licenceUrl?: string;
  sourceUrl: string;
  attribution: string;
}
```

## Validation Requirements

Fail validation for:

- Duplicate IDs
- Duplicate slugs
- Unknown references
- Invalid dates
- Invalid URLs
- Award years earlier than award establishment
- Self-referential adviser relationships
- Invalid joint-recipient links
- Missing sources
- Missing image licence metadata
- Unsupported completeness status
- Empty required text
- Malformed coordinates
