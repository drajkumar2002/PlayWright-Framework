import { LoginLocators } from "../locators/LoginLocators";

export class LoginPage 
{
    constructor(page)
    {
      this.page = page;
    }

    async login(username, passwrod) 
    {
      await this.page.fill(LoginLocators.userNameInput, username);
      await this.page.fill(LoginLocators.passwordInput, passwrod);
      await this.page.click(LoginLocators.loginButton);
    }
}