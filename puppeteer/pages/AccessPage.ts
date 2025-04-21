import BasePage from "./BasePage";
import { Page } from "puppeteer";

export default class LoginPage extends BasePage {
  name: string;
  title: string;
  loginBtn: string;
  draftBtn: string;

  constructor(page: Page) {
    super(page);
    this.name = "Access Page";
    this.title = "span.MuiTypography-root:nth-child(1)";
    this.loginBtn = ".MuiButton-contained";
    this.draftBtn = ".MuiButton-outlined";
  }

  async checkTitle(expectTitle: string): Promise<boolean | Error> {
    // Check if the expected title is present
    const text = await this.getText(this.title);

    if (text && text === expectTitle) {
      return true;
    } else {
      return this.throwError(this.name, 'Title text undefined or not the one expected');
    }

  }

  async checkLoginBtn(expectedText: string): Promise<boolean | Error> {
    
    // Check if the expected btn is present
    const btnText = await this.getText(this.loginBtn);

    if (btnText && btnText === expectedText) {
      return true;
    } else {
      return this.throwError(this.name, 'loginBtn text is undefined or not present');
    }

  }

  async checkDraftBtn(expectedText: string): Promise<boolean | Error> {
    
    // Check if the expected btn is present
    const btnText = await this.getText(this.draftBtn);

    if (btnText && btnText === expectedText) {
      return true;
    } else {
      return this.throwError(this.name, 'loginBtn text is undefined or not present');
    }

  }

}
