import { ProductItemInfo } from "pages/types";
import { ProductCartItemComponent } from "./product-cart-item.component";

export class ProductCartItemsList {
  readonly productCartItems: ProductCartItemComponent[];

  constructor(productItems: ProductItemInfo[]) {
    this.productCartItems = productItems.map((productItemData) => {
      return new ProductCartItemComponent(productItemData);
    });
  }

  selectProductItemComponentByNameOrIndex(
    nameOrIndex: string | number
  ): ProductCartItemComponent {
    if (typeof nameOrIndex === "number") {
      const item = this.productCartItems[nameOrIndex];
      if (!item) {
        throw new Error(`Product item at index ${nameOrIndex} not found.`);
      }
      return item;
    } else {
      const item = this.productCartItems.find(
        (item) => item.productItemInfo.name === nameOrIndex
      );
      if (!item) {
        throw new Error(`Product item with name "${nameOrIndex}" not found.`);
      }
      return item;
    }
  }
}
