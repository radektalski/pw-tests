import { translationsData } from "setup/translations/translations";
import { logger } from "../../libs/logger";
import { ButtonElement } from "../elements/button-element";
import { InputElement } from "../elements/input-element";
import { TextElement } from "../elements/text-element";
import { yourInformationSelectors } from "../selectors/your-information.selectors";

export class YourInfomrationComponent {
  firstNameInput: InputElement;
  lastNameInput: InputElement;
  zipCodeInput: InputElement;
  continueButton: ButtonElement;
  errorMessage: TextElement;

  constructor() {
    this.firstNameInput = new InputElement(
      yourInformationSelectors.inputs.firstName
    );
    this.lastNameInput = new InputElement(
      yourInformationSelectors.inputs.lastName
    );
    this.zipCodeInput = new InputElement(
      yourInformationSelectors.inputs.zipCode
    );
    this.continueButton = new ButtonElement(
      yourInformationSelectors.buttons.continue
    );
    this.errorMessage = new TextElement(
      yourInformationSelectors.text.errorMessgae
    );
  }

  async insertYourInformation(userData: UserData): Promise<void> {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.zipCodeInput.fill(userData.zipcode);
  }

  async verifyFirstNameRequiredErrorMessage(): Promise<void> {
    await this.errorMessage.toHaveText(translationsData.ERROR_FIRST_NAME_REQUIRED);
  }

  async verifyLastNameRequiredErrorMessage(): Promise<void> {
    await this.errorMessage.toHaveText(translationsData.ERROR_LAST_NAME_REQUIRED);
  }

  async verifyZipCodeRequiredErrorMessage(): Promise<void> {
    await this.errorMessage.toHaveText(translationsData.ERROR_ZIPCODE_REQUIRED);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}

export type UserData = {
  firstName: string;
  lastName: string;
  zipcode: string;
};
