// tests/ui/auth/login.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage.js';
import { getCreds } from '../../../utils/testHelpers.js';
import HomePage from '../../../pages/HomePage.js';

let loginPage, homePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.navigate();
  await homePage.clickLogin();
});

test.describe('@Smoke Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const credentials = getCreds();
    await loginPage.login(credentials.email, credentials.password);

    // Verify login success
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Login with admin credentials', async ({ page }) => {
    // Get admin credentials
    const adminCreds = getCreds('adminCredentials');
    await loginPage.login(adminCreds.email, adminCreds.password);

    await expect(page).toHaveURL(/dashboard/);
  });

  test('Test login with multiple credential types', async ({ page }) => {
    // Test different credential types
    const testCases = [
      { type: 'validCredentials', expectedUrl: /dashboard/ },
      { type: 'adminCredentials', expectedUrl: /dashboard/ },
    ];

    for (const testCase of testCases) {
      await page.goto('/login');
      const creds = getCreds(testCase.type);
      await loginPage.login(creds.email, creds.password);
      await expect(page).toHaveURL(testCase.expectedUrl);
    }
  });
});
