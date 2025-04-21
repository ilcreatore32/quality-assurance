// __tests__/Ping.test.ts

import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";
import { expect, describe, test, beforeAll, afterAll } from "@jest/globals";
import AccessPage from "../../pages/AccessPage";
import Config from "../Config";

const { baseUrl, browserConfig } = Config;

describe("Website Access", () => {
  let browser: Browser;
  let page: Page;
  let accessPage: AccessPage;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();
    accessPage = new AccessPage(page);
    await page.goto(baseUrl);
  });

  test("Successful website access", async () => {
    const isExpectedTitle = await accessPage.checkTitle(
      "Bienvenido Asesor de Venta de NetcomPlus"
    );
    expect(isExpectedTitle).toBe(true);
  });

  test('should see the "Ingresar al sistema" button', async () => {
    const isExpectedText = await accessPage.checkLoginBtn(
      "Ingresar al Sistema"
    );
    expect(isExpectedText).toBe(true);
  });

  test('should see the "Borrador" button', async () => {
    const isExpectedText = await accessPage.checkDraftBtn("Borrador");
    expect(isExpectedText).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
