// __tests__/Login.test.ts

import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";
import { expect, describe, test, beforeAll, afterAll } from "@jest/globals";
import LoginPage from "../../pages/LoginPage";
import Config from "../Config";

const { baseUrl, username, password, browserConfig } = Config;

const loginUrl = `${baseUrl}/login`;

describe("Login", () => {
  let browser: Browser;
  let page: Page;
  let loginPage: LoginPage;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await page.goto(baseUrl);
  });

  test("Navigate to Login Page", async () => {
    const btnSeletor = loginPage.loginBtn;

    const btnText = await loginPage.getText(btnSeletor);
    expect(btnText).toBe("Ingresar al Sistema");
    await loginPage.click(btnSeletor);

    const url = await loginPage.getUrl();
    expect(url).toBe(loginUrl);
  });

  test("Successful Login", async () => {
    const values = [
      { selector: "#username", value: username },
      { selector: "#password", value: password },
    ];

    await loginPage.fillOutForm(values);

    await loginPage.click(loginPage.button);
    expect(await loginPage.getErrors(values)).not.toBeInstanceOf(Error);

    const text = await loginPage.getText("#swal2-html-container");
    expect(text?.includes(username)).toBe(true);
  }, 15000);

  test("Close Welcome Modal", async () => {
    await loginPage.click(".swal2-confirm");
    await loginPage.wait(1000);

    const modal = await page.$(".swal2-confirm");
    expect(modal).toBe(null);
  });

  test("Verify Main Menu Visibility", async () => {
    const menuItems = await loginPage.getCount("a.MuiBox-root");
    expect(menuItems > 0).toBe(true);
  });

  test("Exit the Application", async () => {
    await loginPage.click('a.MuiBox-root ~ button');
    const url = await loginPage.getUrl();
    expect(url).toBe(loginUrl);
  });

  afterAll(async () => {
    await browser.close();
  });
});
