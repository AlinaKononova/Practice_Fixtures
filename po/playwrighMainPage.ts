import {Locator, Page} from "@playwright/test";

export class PlaywrightMainPage{

    readonly page: Page;
    readonly getStartedButton: Locator;

    constructor(page : Page){
        this.page = page;
        this.getStartedButton = this.page.locator(".getStarted_Sjon");
    }

    navigateToPlaywrightMainPage = async() =>{
        await this.page.goto("https://playwright.dev/");
    }
}