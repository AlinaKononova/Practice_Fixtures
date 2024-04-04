import {Locator, Page} from "@playwright/test";

export class CypressMainPage{

    readonly page: Page;
    readonly documentationButton: Locator;

    constructor(page : Page){
        this.page = page;
        this.documentationButton =  this.page.locator("[class='mt-\[32px\] flex flex-wrap justify-center gap-\[24px\]'] [href]");
    }

    navigateToCypressMainPage = async() =>{
        await this.page.goto("https://www.cypress.io/");
    }
}