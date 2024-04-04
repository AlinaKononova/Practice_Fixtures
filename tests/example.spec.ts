import { expect } from '@playwright/test';
import{ test } from './fixtures';
import { PlaywrightMainPage } from '../po/playwrighMainPage';
import { CypressMainPage } from '../po/cypressMainPage';

test('Navigate to Main page via PageObject', async ({ page }) => {
  let playwrightMainPage =  new PlaywrightMainPage(page);
  let cypressMainPage =  new CypressMainPage(page);

  await playwrightMainPage.navigateToPlaywrightMainPage();
  await playwrightMainPage.getStartedButton.click();

  await cypressMainPage.navigateToCypressMainPage();
  await cypressMainPage.documentationButton.click();
})

test('Navigate to Main page via Fixtures ', async ({ pagePlaywrightMain, pageCypressMain }) => {
  await pagePlaywrightMain.getStartedButton.click();

  await pageCypressMain.documentationButton.click();
})
