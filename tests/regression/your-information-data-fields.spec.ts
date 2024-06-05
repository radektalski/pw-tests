import { playwrightEngine } from "engine/Engine";
import { test } from "../../fixtures/saucedemoFixture";
import { swaglabsPage } from "../../pages/swag-labs.page";
import { invalidLastNameData, invalidZipCodeData } from "setup/data/getUser";

void playwrightEngine.runTestsInSeparateContext();

test.describe(
  "Product Order Error Message Validation",
  {
    tag: ["@regression"],
  },
  async () => {
    test.beforeEach(async ({ openSaucedemo }) => {
      await openSaucedemo;
      await test.step("Add a product to the cart and proceed to checkout", async () => {
        await swaglabsPage.productItem.addProductItemToCart();
        await swaglabsPage.navBarComponent.clickCartButton();
        await swaglabsPage.cartComponent.clickCheckoutButton();
      });
    });

    test("Displays an error message when the first name field is missing", async () => {
      await swaglabsPage.yourInformationComponent.clickContinue();
      await swaglabsPage.yourInformationComponent.verifyFirstNameRequiredErrorMessage();
    });

    test("Displays an error message when the last name field is missing", async () => {
      await swaglabsPage.yourInformationComponent.insertYourInformation(
        invalidLastNameData
      );
      await swaglabsPage.yourInformationComponent.clickContinue();
      await swaglabsPage.yourInformationComponent.verifyLastNameRequiredErrorMessage();
    });

    test("Displays an error message when the ZIP code field is missing", async () => {
      await swaglabsPage.yourInformationComponent.insertYourInformation(
        invalidZipCodeData
      );
      await swaglabsPage.yourInformationComponent.clickContinue();
      await swaglabsPage.yourInformationComponent.verifyZipCodeRequiredErrorMessage();
    });
  }
);
