import { test as base, chromium, expect, Page } from '@playwright/test';
import { PlaywrightMainPage } from '../po/playwrighMainPage';
import { CypressMainPage } from '../po/cypressMainPage';

type Fixtures = {
    playwrightMainPage: PlaywrightMainPage;
    cypressMainPage: CypressMainPage;
    pagePlaywrightMain: PlaywrightMainPage;
    pageCypressMain: CypressMainPage;
};

export const test = base.extend<Fixtures>({
    playwrightMainPage: async({ page }, use) => {
        const playwrighMainPage = new PlaywrightMainPage(page);
        await playwrighMainPage.navigateToPlaywrightMainPage();
        await playwrighMainPage.getStartedButton.click();

       await use(playwrighMainPage);
    },

    pagePlaywrightMain: async({}, use) => {
        let browser = await chromium.launch();
        let contextPlaywright = await browser.newContext();
        let pagePlaywrightMain = await contextPlaywright.newPage();

        await pagePlaywrightMain.goto("https://playwright.dev/");

        await use(pagePlaywrightMain);
    },

    pageCypressMain: async({}, use) => {
        let browser = await chromium.launch();
        let contextCypress = await browser.newContext();
        let pageCypressMain = await contextCypress.newPage();

        await pageCypressMain.goto("https://www.cypress.io/");

        await use(pageCypressMain);
    }
});

export { expect } from '@playwright/test';  