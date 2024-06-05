import { expect, Locator } from "@playwright/test";
import { playwrightEngine } from "./Engine";

export abstract class BaseElement {
  constructor(public selector: string) {}

  element(selector?: string): Locator {
    return playwrightEngine
      .page()
      .locator(selector ? `${selector}` : this.selector);
  }

  public async getElementValue(): Promise<string> {
    return this.element().inputValue();
  }

  public async toBeVisible(): Promise<void> {
    await this.element().waitFor({ state: "visible" });
  }

  public async toBeHidden(): Promise<void> {
    await this.element().waitFor({ state: "hidden" });
  }

  public async toHaveText(text: string): Promise<void> {
    await expect(this.element()).toHaveText(text);
  }

  public async click(): Promise<void> {
    await this.element().click();
  }

  public async doubleClick(): Promise<void> {
    await this.element().dblclick();
  }

  public async press(key: string): Promise<void> {
    await this.element().press(key);
  }

  public async getText(): Promise<string> {
    const textContent = await playwrightEngine
      .page()
      .textContent(this.selector);
    return textContent !== null ? textContent : "";
  }

  public async getTextElement(): Promise<Locator> {
    return playwrightEngine.page().getByText(this.selector).first();
  }
}
