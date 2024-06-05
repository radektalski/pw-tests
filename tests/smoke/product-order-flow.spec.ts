import { playwrightEngine } from "engine/Engine";
import { test } from "../../fixtures/saucedemoFixture";
import { swaglabsPage } from "../../pages/swag-labs.page";
import { orderData } from "../../setup/data/getProducts";
import { validMinUserData } from "../../setup/data/getUser";

void playwrightEngine.runTestsInSingleContext();

test.describe(
  "Product Order E2E Flow",
  {
    tag: ["@regression", "@smoke"],
  },
  async () => {
    test.beforeEach(async ({ openSaucedemo }) => {
      await openSaucedemo;
    });

    test("User can complete a purchase of a single item", async () => {
      await test.step("Verify product title and add product to the cart", async () => {
        await swaglabsPage.productItem.verifyProductTitleData();
        await swaglabsPage.productItem.addProductItemToCart();
      });

      await test.step("Navigate to the cart", async () => {
        await swaglabsPage.navBarComponent.clickCartButton();
      });

      await test.step("Verify the correct product item is in the cart", async () => {
        const productInCart =
          swaglabsPage.productCartItems.selectProductItemComponentByNameOrIndex(
            0
          );
        await productInCart.verifyProductData();
      });

      await test.step("Proceed to checkout", async () => {
        await swaglabsPage.cartComponent.clickCheckoutButton();
      });

      await test.step("Enter user information and continue", async () => {
        await swaglabsPage.yourInformationComponent.insertYourInformation(
          validMinUserData
        );
        await swaglabsPage.yourInformationComponent.clickContinue();
      });

      await test.step("Verify order information and finish order", async () => {
        await swaglabsPage.overviewComponent.verifyOrderInformation(orderData);
        const productInCart =
          swaglabsPage.productCartItems.selectProductItemComponentByNameOrIndex(
            0
          );
        await productInCart.verifyProductData();
        await swaglabsPage.overviewComponent.finishOrder();
      });
    });
  }
);
