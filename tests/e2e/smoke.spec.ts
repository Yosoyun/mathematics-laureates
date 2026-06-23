import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/awards",
  "/laureates",
  "/fields",
  "/timeline",
  "/world-map",
  "/compare",
  "/methodology",
  "/sources",
];

for (const route of routes) {
  test(`renders ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("main h1").first()).toBeVisible();
  });
}

test("search returns local results", async ({ page }) => {
  await page.goto("/");
  await page.locator("#site-search").fill("Fields");
  await expect(page.getByText("Fields Medal").first()).toBeVisible();
});

test("award filter keeps matching cards", async ({ page }) => {
  await page.goto("/awards");
  await page.getByRole("button", { name: "grand-prize" }).click();
  await expect(
    page.getByRole("heading", { name: "Fields Medal" }),
  ).toBeVisible();
});
