import { ProductItemInfo } from "pages/types";
import { ButtonElement } from "../../elements/button-element";
import { TextElement } from "../../elements/text-element";
import { productItemSelectors } from "../../selectors/product/product-item.selectors";

export class ProductItemComponent {
  readonly titleText: TextElement;
  readonly addToCartButton: ButtonElement;

  readonly productItemInfo: ProductItemInfo;

  constructor(productItemInfo: ProductItemInfo) {
    this.productItemInfo = productItemInfo;
    this.titleText = new TextElement(
      productItemSelectors.text.title(productItemInfo.id)
    );
    this.addToCartButton = new ButtonElement(
      productItemSelectors.buttons.addToCart(this.productItemInfo.name)
    );
  }

  async addProductItemToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async verifyProductTitleData(): Promise<void> {
    await this.titleText.toHaveText(this.productItemInfo.title);
  }
}
