import { awards, fields, laureates, sources } from "../src/lib/catalog";

const errors: string[] = [];
const internalRoutes = new Set<string>([
  "/",
  "/awards",
  "/laureates",
  "/fields",
  "/timeline",
  "/world-map",
  "/compare",
  "/inspiration",
  "/methodology",
  "/sources",
  "/about",
  "/contribute",
  "/corrections",
  "/privacy",
]);

for (const award of awards) internalRoutes.add(`/awards/${award.slug}`);
for (const laureate of laureates)
  internalRoutes.add(`/laureates/${laureate.slug}`);
for (const field of fields) internalRoutes.add(`/fields/${field.slug}`);

for (const source of sources) {
  try {
    new URL(source.url);
  } catch {
    errors.push(`Invalid source URL for ${source.id}: ${source.url}`);
  }
}

for (const route of internalRoutes) {
  if (!route.startsWith("/"))
    errors.push(`Internal route must start with slash: ${route}`);
  if (route.endsWith("/") && route !== "/")
    errors.push(`Internal route should be slashless: ${route}`);
}

if (errors.length > 0) {
  console.error("Link check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Checked ${sources.length} external source URLs and ${internalRoutes.size} internal routes.`,
);
