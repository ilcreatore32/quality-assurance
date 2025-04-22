import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://iniciativas.netcomplusve.com/');

  await page.getByRole('button', { name: 'Borrador' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Test Name');
  
  await page.getByRole('textbox', { name: 'Nombre' }).press('Tab');
  await page.getByRole('textbox', { name: 'Apellido' }).fill('Test Lastname');
  
  await page.getByRole('textbox', { name: 'Apellido' }).press('Tab');
  await page.getByRole('combobox', { name: 'V' }).press('Tab');
  await page.getByRole('textbox', { name: 'Cedula de Identidad' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Cedula de Identidad' }).press('Tab');
  
  await page.getByRole('button', { name: 'Open flags menu' }).first().press('Tab');
  await page.getByRole('textbox', { name: 'Teléfono', exact: true }).fill('+58 424 123457');
  await page.getByRole('textbox', { name: 'Teléfono', exact: true }).press('Tab');
  
  await page.getByRole('button', { name: 'Open flags menu' }).nth(1).press('Tab');
  await page.getByRole('textbox', { name: 'Teléfono 2 (Opcional)' }).fill('+58 424 123458');
  await page.getByRole('textbox', { name: 'Teléfono 2 (Opcional)' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Disponibilidad' }).press('Tab');
  await page.getByRole('button', { name: 'Choose date, selected date is' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Observación' }).fill('qwertyuiop asdfghjkl zxcvbnm');
  await page.getByRole('textbox', { name: 'Observación' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Dirección' }).fill('123456789 987654321 478159236');
  
  await page.getByRole('button', { name: 'Guardar' }).click();
});