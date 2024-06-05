import { expect } from "@playwright/test";
import { BaseElement } from "../../engine/BaseElement";

export class ButtonElement extends BaseElement {
  constructor(selector: string) {
    super(selector);
  }

  public async toBeEnabled(): Promise<void> {
    await expect(this.element()).toBeEnabled();
  }

  public async toBeDisabled(): Promise<void> {
    await expect(this.element()).toBeDisabled();
  }

  public async isVisible(): Promise<boolean> {
    return this.element().isVisible();
  }

  public async getLabelText(): Promise<string> {
    const textContent = await this.element().textContent();
    return textContent ?? "";
  }
}
