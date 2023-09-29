import { expect, test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("/");
  const name = await page.innerText("h1");
  expect(name).toBe("Empower Your Mental Health");
});
