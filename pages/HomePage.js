import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.validateLogo = page.locator(
      'xpath=//*[@id="root"]/div/header/div/a[1]'
    );
    this.loginBtn = page.getByText('Login');
    this.requestDemoBtn = page.getByText('Request a Demo');
    this.trialBtn = page.locator(
      'xpath=//*[@id="root"]/div/main/div/div[1]/div[2]/a[1]'
    );
  }

  async verifyLogoVisible() {
    await expect(this.validateLogo).toBeVisible();
    return this;
  }

  async clickLogin() {
    await this.loginBtn.click();
    return this;
  }

  async clickRequestDemo() {
    await this.requestDemoBtn.click();
    return this;
  }

  async clickStartTrial() {
    await this.trialBtn.click();
    return this;
  }

  async verifyLogin() {
    await this.verifyLogoVisible();
    await this.clickLogin();
    await this.page.goBack();
    await this.clickRequestDemo();
    await this.page.goBack();
    await this.clickStartTrial();
    await this.page.goBack();
  }
}
