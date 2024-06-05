import { Page } from "@playwright/test";
import { playwrightEngine } from "./Engine";

export abstract class BasePage {
  async open(url: string): Promise<void> {
    await playwrightEngine.open(url);
    await this.waitForLoadState();
  }

  async page(): Promise<Page> {
    return playwrightEngine.page();
  }

  async openUrl(url: string): Promise<void> {
    await this.open(url);
  }

  async waitForUrl(url: string): Promise<void> {
    await playwrightEngine.page().waitForURL(url);
  }

  async waitForLoadState(
    state?: "load" | "domcontentloaded" | "networkidle",
    options?: { timeout?: number }
  ): Promise<void> {
    await playwrightEngine.page().waitForLoadState(state, options);
  }

  async waitForTimeout(timeout: number): Promise<void> {
    await playwrightEngine.page().waitForTimeout(timeout);
  }
}
