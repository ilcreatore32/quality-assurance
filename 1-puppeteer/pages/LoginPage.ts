import BasePage from "./BasePage";
import { Page } from "puppeteer";

type Input = { selector: string; value: string };

export default class LoginPage extends BasePage {
  name: string;
  loginBtn: string;
  button: string;

  constructor(page: Page) {
    super(page);
    this.name = "Login Page";
    this.loginBtn = ".MuiButton-contained";
    this.button = 'button[type="submit"]';
  }

  async fillOutForm(inputs: Input[]): Promise<void> {
    for (const { selector, value } of inputs) {
      await this.type(selector, value);
    }
  }

  async getErrors(inputs: Input[]): Promise<void | Error> {
    for (const { selector, value } of inputs) {
      const helpText = `${selector}-helper-text`;
      const error = await this.page.$(helpText);

      if (error) {
        const text = await this.page.$eval(helpText, (e) => e.innerHTML);
        return this.throwError(
          this.name,
          `The input: ${selector}, have an error: ${text}, for value ==> '${value}'`
        );
      }
    }
  }
}
