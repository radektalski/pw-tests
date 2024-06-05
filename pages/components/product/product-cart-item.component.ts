import { ProductItemInfo } from "pages/types";
import { TextElement } from "../../elements/text-element";
import { productCartItemSelectors } from "../../selectors/product/product-cart-item.selectors";

export class ProductCartItemComponent {
  readonly descriptionText: TextElement;
  readonly titleText: TextElement;
  readonly priceText: TextElement;

  readonly productItemInfo: ProductItemInfo;

  constructor(productItemInfo: ProductItemInfo) {
    this.productItemInfo = productItemInfo;

    this.titleText = new TextElement(
      productCartItemSelectors.text.title(productItemInfo.id)
    );
    this.descriptionText = new TextElement(
      productCartItemSelectors.text.description(productItemInfo.id)
    );
    this.priceText = new TextElement(
      productCartItemSelectors.text.price(productItemInfo.id)
    );
  }

  async verifyProductData(): Promise<void> {
    await this.titleText.toHaveText(this.productItemInfo.title);
    await this.descriptionText.toHaveText(this.productItemInfo.description);
    await this.priceText.toHaveText(this.productItemInfo.price);
  }
}
