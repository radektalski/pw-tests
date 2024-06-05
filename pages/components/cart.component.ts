import { ProductItemInfo } from "pages/types";
import { ButtonElement } from "../elements/button-element";
import { cartSelectors } from "../selectors/cart.selectors";
import { ProductCartItemsList } from "./product/product-items-list.component";

export class CartComponent {
  readonly checkoutButton: ButtonElement;

  constructor() {
    this.checkoutButton = new ButtonElement(cartSelectors.buttons.checkout);
  }

  async clickCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }

  getProductItemsListInCart(
    productItems: ProductItemInfo[]
  ): ProductCartItemsList {
    return new ProductCartItemsList(productItems);
  }
}
