import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

private readonly usernameInput;
private readonly passwordInput;
private readonly loginButton;

constructor(page){
    super(page);
    this.usernameInput = ("//input[@id=\"user-name\"]");
    this.passwordInput = ("//input[@id=\"password\"]");
    this.loginButton = ("//input[@id=\"login-button\"]");
}

async login(username, password) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickButton(this.loginButton);
  }


}
