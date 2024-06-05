import { BasePage } from "../engine/BasePage";
import { url } from "../setup/config";
import { ButtonElement } from "./elements/button-element";
import { InputElement } from "./elements/input-element";
import { loginSelectors } from "./selectors/login.selectors";
import { Credentials } from "./types";

export class LoginPage extends BasePage {
  loginButton: ButtonElement;
  usernameInput: InputElement;
  passwordInput: InputElement;

  constructor() {
    super();
    this.loginButton = new ButtonElement(loginSelectors.buttons.login);
    this.usernameInput = new InputElement(loginSelectors.inputs.username);
    this.passwordInput = new InputElement(loginSelectors.inputs.password);
  }

  async login(credentials: Credentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }

  async openSaucedemoLogin(): Promise<void> {
    await this.open(url);
  }
}

export const loginPage = new LoginPage();
