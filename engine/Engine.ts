import { Browser, BrowserContext, Page } from "playwright-core";
import { test } from "@playwright/test";

export interface Initialization {
  playwrightBrowser?: Browser;
  browserContext?: BrowserContext;
  page?: Page;
  browserName?: string;
}

export class Engine {
  browser?: Browser;
  context?: BrowserContext;
  browserName?: string;
  private playwrightPage?: Page;

  /**
    Initializes the class instance.
    @param {Initialization} init - An initialization object.
  */
  async init(init: Initialization): Promise<void> {
    if (this.browser) {
      await this.close(); // Close existing browser if initialized
    }
    this.browser = init.playwrightBrowser;
    this.context = init.browserContext;
    this.playwrightPage = init.page;
  }
  /**
    Initializes a new browser context and page instance.
    @param {Initialization} init - An initialization object.
    @throws {Error} If the browser instance is not provided.
  */
  async initNew(init: Initialization): Promise<void> {
    if (!init.playwrightBrowser) {
      throw new Error(
        "Cannot initialize. Playwright browser instance is required."
      );
    }
    this.browser = init.playwrightBrowser;
    this.browserName = init.browserName;
    this.context = await this.browser.newContext();
    this.playwrightPage = await this.browser.newPage();
  }

  async close(): Promise<void> {
    await this.browser?.close();
    this.browser = undefined;
  }

  async open(url: string): Promise<void> {
    if (!this.page()) {
      throw new Error(
        "Cannot open URL. Page is not initialized. Use init() method."
      );
    }
    await this.page().goto(url);
  }
  /**
    Gets the current Playwright page instance.
    @throws {Error} If the page instance has not been initialized.
  */
  page(): Page {
    if (!this.playwrightPage) {
      throw new Error("Initialize the page first with init() method");
    }
    return this.playwrightPage;
  }

  /**
    Runs Playwright tests in a single context for all test cases.
    This method creates a new page for each test case but uses the same browser context.
    This can be useful when you need to reuse some fields or objects that do not need
    to be reset after every test case, saving time and resources.
    * @param {string} url - The URL to open before each test.
    * @param {Function} setup - A setup function to be executed before each test.
    * @param {Function} teardown - A teardown function to be executed after each test.
    * @returns {Promise<void>}
  */
  async runTestsInSingleContext(
    url?: string,
    setup?: () => Promise<void>,
    teardown?: () => Promise<void>
  ): Promise<void> {
    test.beforeAll(
      async ({
        browser,
        browserName,
      }: {
        browser: Browser;
        browserName: string;
      }) => {
        await this.initNew({
          playwrightBrowser: browser,
          browserName: browserName,
        });
        if (url) {
          await this.open(url);
        }
      }
    );

    test.beforeEach(async () => {
      if (url) {
        await this.open(url);
      }
      if (setup) {
        await setup();
      }
    });

    test.afterAll(async () => {
      await this.page().close();
      if (teardown) {
        await teardown();
      }
    });
  }

    /**
   * Runs Playwright tests in a separate context for every test case.
   * This method creates a new browser context and page for each test case,
   * so they are isolated from each other and do not share any state or data.
   * @param {string} url - The URL to open before each test.
   * @param {Function} setup - A setup function to be executed before each test.
   * @param {Function} teardown - A teardown function to be executed after each test.
   * @returns {Promise<void>}
   */
    async runTestsInSeparateContext(
      url?: string,
      setup?: () => Promise<void>,
      teardown?: () => Promise<void>
    ): Promise<void> {
      test.beforeEach(async ({ browser, browserName }: { browser: Browser; browserName: string }) => {
        await this.initNew({ playwrightBrowser: browser, browserName: browserName });
        if (url) {
          await this.open(url);
        }
        if (setup) {
          await setup();
        }
      });
  
      test.afterEach(async () => {
        await this.page().close();
        if (teardown) {
          await teardown();
        }
      });
    }
  
}


export const playwrightEngine = new Engine();
