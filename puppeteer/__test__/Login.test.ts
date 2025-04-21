// __tests__/Login.test.ts

import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';
import { expect, describe, test, beforeAll, afterAll } from '@jest/globals';
import LoginPage from '../pages/LoginPage';
import Config from './Config';

const {
  baseUrl,
  username,
  password,
  browserConfig
} = Config;

const loginUrl = `${baseUrl}/login`;

describe('Test: Login on \'Iniciativas\'', () => {
  let browser: Browser
  let page: Page;
  let loginPage: LoginPage;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.visit(loginUrl);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Should visit and check Login Url', async () => {
    const url = await loginPage.getUrl();
    expect(url).toBe(loginUrl);
  });

  test('Should Login Succesfully', async () => {
    await loginPage.login(username, password);
  }, 15000);

  test('Should check Main menu', async () => {
    await loginPage.checkMenu();
  });
});