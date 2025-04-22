// __tests__/Draft.test.ts

import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";
import { expect, describe, test, beforeAll, afterAll } from "@jest/globals";
import DraftPage from "../../pages/DraftPage";
import Config from "../../Config";
import path from "path";
import fs from "fs";

const { baseUrl, browserConfig } = Config;
const downloadPath = path.resolve(__dirname, "../downloads");

const values = [
  { selector: "#name", value: "Test Name" },
  { selector: "#lastname", value: "Test Lastname" },
  { selector: "#document", value: "12345678" },
  { selector: "#phone", value: "4241234567" },
  { selector: "#mobile", value: "4241234568" },
  { selector: "#email", value: "test@test.com" },
  { selector: "#comment", value: "123456789" },
  { selector: "#address", value: "qwertyuiop asdfghjkl zxcvbnm" },
];

describe("Draft Form", () => {
  let browser: Browser;
  let page: Page;
  let draftPage: DraftPage;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();
    draftPage = new DraftPage(page);
    await page.goto(baseUrl);
  });

  test("Access the draft form", async () => {

    const draftBtn = await draftPage.getDraftBtn("Borrador");
    if (!(draftBtn instanceof Error)) {
        await draftPage.click(draftBtn.selector);
    }

    const isDraftUrl = await draftPage.checkUrl();
    expect(isDraftUrl).toBe(true);

    const isFormPresent = await draftPage.checkForm();
    expect(isFormPresent).toBe(true);
  });

  test("Access the draft form", async () => {
    const isDraftUrl = await draftPage.checkUrl();
    expect(isDraftUrl).toBe(true);

    const isFormPresent = await draftPage.checkForm();
    expect(isFormPresent).toBe(true);
  });

  test("Fill out the draft form", async () => {

    // Ensure the download directory exists
    if (!fs.existsSync(downloadPath)) {
        fs.mkdirSync(downloadPath);
    }

    // Set Chrome's download behavior
    const client = await page.createCDPSession();
    await client.send("Page.setDownloadBehavior", {
        behavior: "allow",
        downloadPath: downloadPath,
    });

    await draftPage.fillOutForm(values);
    await draftPage.click('button[type="submit"]');

    expect(await draftPage.getErrors(values)).not.toBeInstanceOf(Error);
  }, 20000);

  test("Verify the download file", async () => {

    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("File not downloaded")), 10000);
        const interval = setInterval(() => {
            const files = fs.readdirSync(downloadPath);
            if (files.length > 0) {
                clearTimeout(timeout);
                clearInterval(interval);
                resolve(true);
            }
        }, 500);
    });

    const files = fs.readdirSync(downloadPath);
    expect(files.length).toBeGreaterThan(0);

  });

  afterAll(async () => {
    if (fs.existsSync(downloadPath)) {
        fs.rmSync(downloadPath, { recursive: true, force: true });
    }
    await browser.close();
  });
});
