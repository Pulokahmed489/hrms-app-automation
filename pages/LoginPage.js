import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.emailInput = page.getByPlaceholder('Email');
    this.passInput = page.getByPlaceholder('Password');
    this.continueBtn = page.getByText('Continue');
    this.loginBtn = page.getByText('Login');
  }

  async login(email, password) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.continueBtn.click();
    await this.passInput.fill(password);
    await this.loginBtn.click();
  }
}
