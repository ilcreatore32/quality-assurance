import BasePage from "./BasePage";
import { Page } from 'puppeteer';

export default class LoginPage extends BasePage {
    userInput: string;
    passwordInput: string;
    submitButton: string;

    constructor(page: Page) {
        super(page);
        this.userInput = '#username';
        this.passwordInput = '#password';
        this.submitButton = '/html/body/div[1]/main/div[2]/div/form/button';
    }

    async login(username: string, password: string): Promise<void> {

        // Login to the application
        await this.type("#username", username);
        await this.type("#password", password);
        await this.click("button[type='submit']");

        // Check if the login was successful
        const text = await this.getText('#swal2-html-container')

        if (!text?.includes(username)) {
            throw new Error(`Error on login: ${text}`);
        }

        // Close Swal2 popup
        await this.click('.swal2-confirm')

    }

    async checkMenu(): Promise<void>{

        // Check if the main menu is displayed
        const menu = await this.getCount('a.MuiBox-root');
        if (menu < 1) {
            throw new Error('Error on checkMenu: Menu not found');
        }

    }

}