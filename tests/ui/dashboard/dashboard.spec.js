import { test, expect } from '../../../fixtures/uiFixtures';

test.skip('Dashboard loads for logged-in user', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('h1')).toHaveText('Dashboard');
});
