// __tests__/Ping.test.ts

import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';
import { expect, describe, test, beforeAll, afterAll } from '@jest/globals';
import Config from './Config';

const {
  baseUrl,
  browserConfig
} = Config;

describe('Test: Ping a to: \'Iniciativas\'', () => {
  let browser: Browser
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Should visit: NetcomPlus - Iniciativas', async () => {
    const title = await page.title();
    expect(title).toBe('NetcomPlus - Iniciativas');
  });

});