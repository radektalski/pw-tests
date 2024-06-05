import { expect } from "@playwright/test";
import { BaseElement } from "../../engine/BaseElement";

export class TextElement extends BaseElement {
  readonly text: string;
  constructor(selector: string) {
    super(selector);
    this.text = `${this.selector}`;
  }
  //? usage:
  //await registration.text.whRegistration.validateText('William Hill registration');
  async validateTextByLocator(translationText: string): Promise<void> {
    await expect(await this.element()).toHaveText(translationText);
  }

  async validateText(translationText: string): Promise<void> {
    const element = await this.getTextElement();
    expect(await element.textContent()).toBe(translationText);
  }
}
