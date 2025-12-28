import { test, expect } from '@playwright/test';
import HomePage from '../../../pages/HomePage';

let homePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigate();
});

test.describe('@Smoke Test: Homepage Functionality', () => {
  test('Homepage loads with visible logo and functional buttons', async ({
    page,
  }) => {
    await homePage.verifyLogin();
    expect(page.url()).toBe(process.env.BASE_URL);
  });
});
