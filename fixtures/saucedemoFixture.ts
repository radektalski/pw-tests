import { test as base } from "@playwright/test";
import { LoginPage, loginPage } from "../pages/login.page";

type Fixtures = {
  openSaucedemo: LoginPage;
};

export const test = base.extend<Fixtures>({
  // eslint-disable-next-line no-empty-pattern
  openSaucedemo: async ({}, use) => {
    await loginPage.openSaucedemoLogin();
    await loginPage.login({
      username: "standard_user",
      password: "secret_sauce",
    });
    await use(loginPage);
  },
});
