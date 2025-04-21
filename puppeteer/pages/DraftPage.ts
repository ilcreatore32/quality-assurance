import BasePage from "./BasePage";
import { Page } from "puppeteer";

type Input = { selector: string; value: string };

export default class DraftPage extends BasePage {
  name: string;
  draftBtn: string;
  form: string;

  constructor(page: Page) {
    super(page);
    this.name = "Draft Page";
    this.draftBtn = ".MuiButton-outlined";
    this.form = "form.MuiPaper-root";
  }

  async getDraftBtn(
    expectedText: string
  ): Promise<{ text: string; selector: string } | Error> {
    // Check if the expected btn is present
    const btnText = await this.getText(this.draftBtn);

    if (btnText && btnText === expectedText) {
      return {
        text: btnText,
        selector: this.draftBtn,
      };
    } else {
      return this.throwError(
        this.name,
        "loginBtn text is undefined or not present"
      );
    }
  }

  async checkUrl(): Promise<boolean | Error> {
    // Check if the location is the expected
    const url = await this.getUrl();

    if (url && url.includes("draft")) {
      return true;
    } else {
      return this.throwError(
        this.name,
        "url undefined or not present on current location"
      );
    }
  }

  async checkForm(): Promise<boolean | Error> {
    // Check if the draft form is present
    const draftForm = await this.page.waitForSelector(this.form);

    if (draftForm) {
      return true;
    } else {
      return this.throwError(
        this.name,
        "Draft form is not present on current location"
      );
    }
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
