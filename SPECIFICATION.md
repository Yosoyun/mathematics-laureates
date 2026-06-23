# Product Specification

## Product Name

Working title: **The Laureate Equation**

Subtitle: **The People, Prizes and Ideas That Shaped Mathematics**

The implementation must allow the name to be changed centrally.

## Vision

Create a luxurious, academically rigorous, distraction-free digital archive of major mathematics and statistics awards and their laureates.

The platform should feel like:

- A premium digital museum
- A mathematical research encyclopedia
- An interactive historical archive
- A career-inspiration platform
- A carefully edited academic publication

## Primary User Goals

Users must be able to:

- Discover major awards
- Explore winners by award and year
- Read detailed laureate profiles
- Understand award-winning contributions at multiple levels
- Trace connections between people, institutions, countries, fields, and time periods
- Compare awards and laureates
- Follow educational and research pathways
- Access sources and original citations
- Identify incomplete or uncertain data clearly

## Audience Layers

### General Reader

- Simple language
- Short summaries
- High-level significance
- Clear context

### Student

- Research fields
- Educational journey
- Prerequisites
- Learning resources
- Major theorems and ideas

### Research Reader

- Technical context
- Publications
- DOI, arXiv, institutional, or journal references
- Collaborators and intellectual lineage
- Advanced explanation

## Required Awards

### International Grand Prizes

- Fields Medal
- Abel Prize
- Wolf Prize in Mathematics
- Chern Medal
- Breakthrough Prize in Mathematics

### AMS and International Research Prizes

- Bôcher Memorial Prize
- Frank Nelson Cole Prize in Algebra
- Frank Nelson Cole Prize in Number Theory
- Leroy P. Steele Prize for Lifetime Achievement
- Leroy P. Steele Prize for Mathematical Exposition
- Leroy P. Steele Prize for Seminal Contribution to Research
- IMU Abacus Medal
- Ramanujan Prize for Young Mathematicians from Developing Countries

### Additional Major Prizes

- Sylvester Medal
- Clay Research Award
- Shaw Prize in Mathematical Sciences
- Ostrowski Prize
- Fermat Prize
- Norbert Wiener Prize in Applied Mathematics
- Balzan Prize relevant to mathematics or mathematical sciences
- Frederic Esser Nemmers Prize in Mathematics
- Rousseeuw Prize for Statistics
- International Prize in Statistics

The architecture must support adding more awards without redesign.

## Required Routes

- `/`
- `/awards`
- `/awards/[award-slug]`
- `/laureates`
- `/laureates/[laureate-slug]`
- `/fields`
- `/fields/[field-slug]`
- `/timeline`
- `/world-map`
- `/compare`
- `/inspiration`
- `/methodology`
- `/sources`
- `/about`
- `/contribute`
- `/corrections`
- `/privacy`
- `/404`

## Homepage

Include:

- Premium minimal navigation
- Hero section
- Universal search
- Featured awards
- Featured laureates
- Timeline preview
- Research-field explorer preview
- Global map preview
- Discover-by-century or era section
- Inspiration stories
- Data-transparency statement
- Methodology and contribution links

Hero direction:

**The Minds, Ideas and Honours That Shaped Mathematics**

Supporting idea:

Explore the world’s greatest mathematics awards, the people who earned them, and the ideas that transformed human knowledge.

## Award Page

Each award page should support:

- Official name
- Short name
- Awarding organisation
- Country or region
- Year established
- Frequency
- Eligibility
- Age restrictions
- Prize value with reference year and currency
- Selection process
- Historical significance
- Major milestones
- Full or transparently partial winners list
- Joint winners
- Timeline
- Country distribution
- Institution distribution
- Research-field distribution
- Official URL
- Sources
- Last verified date
- Data-completeness status

## Laureate Page

Include where verified:

- Full name
- Alternate names
- Portrait and licence
- Birth and death information
- Birthplace
- National affiliations
- Institutions
- Research fields
- Academic positions
- Award and year
- Official citation
- Co-recipients
- Biography
- Education
- Doctoral institution
- Doctoral adviser
- Academic career
- Major collaborators
- Major contributions
- Problems solved
- Methods or theories introduced
- Impact on later research
- Applications
- Major publications
- Books
- Lectures
- Other awards
- Named concepts
- Academic descendants
- Quotations with sources
- Related people, awards, fields, and learning resources

## Multi-Level Mathematical Explanation

For major contributions, provide:

1. Plain-language explanation
2. Student or undergraduate explanation
3. Advanced or research-level context
4. Prerequisites
5. Suggested books, lectures, or papers

## Search

Search across:

- Names
- Awards
- Years
- Countries
- Institutions
- Fields
- Concepts
- Citations
- Publications

Required:

- Fast local indexing
- Keyboard accessibility
- Autocomplete
- Typo tolerance
- Highlighted terms
- No-results guidance

## Filters

Support:

- Award
- Award year
- Historical period
- Country
- National affiliation
- Institution
- Research field
- Pure or applied category
- Individual or joint award
- Young-researcher or lifetime category
- Completeness status

Gender should only be used where documented, appropriate, and ethically handled.

## Timeline

Show:

- Award establishment
- Award years
- Laureates
- Major mathematical developments
- Historical context

Must have an accessible textual alternative.

## World Map

Show separate modes for:

- Birthplace
- National affiliation
- Working institution
- Awarding organisation

Do not conflate these concepts.

Use Leaflet and OpenStreetMap. The essential information must remain available if the map fails.

## Research-Field Explorer

Cover:

- Algebra
- Number theory
- Geometry
- Topology
- Analysis
- Probability
- Statistics
- Combinatorics
- Logic
- Applied mathematics
- Mathematical physics
- Dynamical systems
- Partial differential equations
- Theoretical computer science
- Information science

Each field should link to laureates, awards, concepts, publications, and learning prerequisites.

## Comparison

Allow comparison of:

- Awards
- Laureates
- Eligibility
- Frequency
- Prize value
- Research fields
- Institutions
- Historical patterns
- Geographic patterns

Do not create subjective “best mathematician” rankings.

## Inspiration Section

Title: **Path to Mathematical Greatness**

Include sourced:

- Educational journeys
- Research turning points
- Challenges and failures
- Advice
- Diverse career paths
- Recommended skill pathways

Explicitly state that no pathway guarantees an award.

## UX

- Mobile-first
- Responsive
- Keyboard accessible
- Screen-reader compatible
- Low-bandwidth friendly
- Breadcrumbs
- Sticky but restrained navigation
- Page table of contents
- Reading progress
- Back-to-top control
- Dark and light themes
- Reduced motion
- Print-friendly profiles
- Shareable URLs
- Clear citations

## Exclusions

Do not include:

- Advertising
- Paywalls
- Autoplay
- Intrusive pop-ups
- Forced registration
- Infinite-scroll traps
- Excessive animation
- Fake rankings
- Unsourced claims
- Generic stock imagery
- Unnecessary dashboards

## SEO

Implement:

- Semantic HTML
- Unique titles and descriptions
- Canonical URLs
- Open Graph metadata
- Social images
- Structured data
- Sitemap
- robots.txt
- Breadcrumb schema
- Person schema
- Accessible alt text
- Clean URLs

## Performance

Targets:

- Lighthouse Performance 90+
- Accessibility 95+
- Best Practices 95+
- SEO 95+

Use static generation, lazy loading, responsive images, minimal JavaScript, and local search.

## Deployment

Use GitHub Pages through GitHub Actions. Support repository subpaths. No paid services or runtime secrets.
