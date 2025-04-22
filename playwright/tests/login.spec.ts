import { test, expect } from "@playwright/test";
import Config from "../Config";

const { baseUrl, username, password } = Config;

test("test", async ({ page }) => {
  // Go to login
  await page.goto(baseUrl);
  await page.getByRole("button", { name: "Ingresar al Sistema" }).click();

  // Fill out the form
  await page.getByRole("textbox", { name: "Usuario" }).click();
  await page.getByRole("textbox", { name: "Usuario" }).fill(username);
  await page.getByRole("textbox", { name: "Contraseña" }).click();
  await page.getByRole("textbox", { name: "Contraseña" }).fill(password);
  await page.getByRole("button", { name: "Ingresar" }).click();

  // Open dialog
  const dialog = await page.waitForSelector(".swal2-popup");
  const dialogIsVisible = await dialog.isVisible();
  expect(dialogIsVisible).toBe(true);

  // Verify dialog Username
  const welcomeText = await page.getByText("Bienvenid@").textContent();
  expect(welcomeText?.includes(username)).toBe(true);

  // Close dialog
  await page.getByRole("button", { name: "Continuar" }).click();
  await page.waitForTimeout(1000);

  // Verify dialog
  const dialogIsHidden = await dialog.isVisible();
  expect(dialogIsHidden).toBe(false);

  // Log out
  await page.getByRole("button", { name: "Salir" }).click();
});
