import { expect } from "@playwright/test";
import { BaseElement } from "../../engine/BaseElement";

export class InputElement extends BaseElement {
  constructor(selector: string) {
    super(selector);
  }

  async fill(
    value: string,
    options?: { timeout?: number; delay?: number }
  ): Promise<void> {
    await this.element().fill(value, options);
  }

  async checkValue(value: string): Promise<void> {
    await expect(this.element()).toHaveValue(value);
  }

  async toBeEnabled(): Promise<void> {
    await expect(this.element()).toBeEnabled();
  }

  async toBeDisabled(): Promise<void> {
    await expect(this.element()).toBeDisabled();
  }
}
