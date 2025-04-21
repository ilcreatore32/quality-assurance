import { ElementHandle, Page } from "puppeteer";

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getUrl(): Promise<string> {
    return await this.page.url();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getText(selector: string): Promise<string | null> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.$eval(selector, (e) => e.textContent);
    } catch (e) {
      throw new Error(`Error on getText(${selector}): ${e}`);
    }
  }

  async getAttribute(
    selector: string,
    attribute: string
  ): Promise<string | null> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.$eval(selector, (e) => e.getAttribute(attribute));
    } catch (e) {
      throw new Error(`Error on getAttribute(${selector}): ${e}`);
    }
  }

  async getValue(selector: string): Promise<string | null> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.$eval(selector, (e) => e.getAttribute("value"));
    } catch (e) {
      throw new Error(`Error on getValue(${selector}): ${e}`);
    }
  }

  async getCount(selector: string): Promise<number> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.$$eval(selector, (e) => e.length);
    } catch (e) {
      throw new Error(`Error on getCount(${selector}): ${e}`);
    }
  }

  async click(selector: string): Promise<void> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.click(selector);
    } catch (e) {
      throw new Error(`Error on click(${selector}): ${e}`);
    }
  }

  async type(selector: string, text: string, opts = {}): Promise<void> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.type(selector, text, opts);
    } catch (e) {
      throw new Error(`Error on type(${selector}): ${e}`);
    }
  }

  async doubleClick(selector: string): Promise<void> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.click(selector, { clickCount: 2 });
    } catch (e) {
      throw new Error(`Error on doubleClick(${selector}): ${e}`);
    }
  }

  async wait(time: number): Promise<void> {
    return await new Promise((r) => setTimeout(r, time));
  }

  async getElement(selector: string): Promise<ElementHandle | null> {
    try {
      await this.page.waitForSelector(selector);
      return await this.page.$(selector);
    } catch (e) {
      throw new Error(`Error on getElement(${selector}): ${e}`);
    }
  }

  throwError(pageName: string, e?: any): Error {
    throw new Error(`${pageName}: ${e}`);
  }
}
