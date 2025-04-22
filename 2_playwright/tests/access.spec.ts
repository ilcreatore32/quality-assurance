import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://iniciativas.netcomplusve.com/");

  const titleVisible = await page.getByText("Bienvenido Asesor de Venta de").isVisible();
  expect(titleVisible).toBe(true);

  const loginBtnVisible = await page.getByRole("button", { name: "Ingresar al Sistema" }).isVisible();
  expect(loginBtnVisible).toBe(true);
  
  const draftBtnVisible = await page.getByRole("button", { name: "Borrador" }).isVisible();
  expect(draftBtnVisible).toBe(true);
});
