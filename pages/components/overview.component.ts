import { translationsData } from "setup/translations/translations";
import { ButtonElement } from "../elements/button-element";
import { TextElement } from "../elements/text-element";
import { overviewSelectors } from "../selectors/overview.selectors";
import { ProductCartItemsList } from "./product/product-items-list.component";
import { ProductItemInfo } from "pages/types";

export class OverviewComponent {
  readonly paymentInformation: TextElement;
  readonly shippingInformation: TextElement;
  readonly totalPrice: TextElement;
  readonly completeHeader: TextElement;
  readonly completeMessage: TextElement;
  readonly finishButton: ButtonElement;

  constructor() {
    this.paymentInformation = new TextElement(
      overviewSelectors.text.paymentInformation
    );
    this.shippingInformation = new TextElement(
      overviewSelectors.text.shippingInformation
    );
    this.totalPrice = new TextElement(overviewSelectors.text.totalPrice);
    this.completeHeader = new TextElement(
      overviewSelectors.checkoutCompleted.header
    );
    this.completeMessage = new TextElement(
      overviewSelectors.checkoutCompleted.message
    );
    this.finishButton = new ButtonElement(
      overviewSelectors.buttons.finishButton
    );
  }

  getProductItemsListInCart(
    productItems: ProductItemInfo[]
  ): ProductCartItemsList {
    return new ProductCartItemsList(productItems);
  }

  async verifyOrderInformation(orderData: OrderData): Promise<void> {
    await this.paymentInformation.toHaveText(orderData.paymentInformation);
    await this.shippingInformation.toHaveText(orderData.shippingInformation);
    await this.totalPrice.toHaveText(`Total: ${orderData.totalPrice}`);
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
    await this.completeHeader.toHaveText(translationsData.THANK_YOU_FOR_ORDER);
    await this.completeMessage.toHaveText(translationsData.ORDER_DISPATCHED);
  }
}

export type OrderData = {
  paymentInformation: string;
  shippingInformation: string;
  totalPrice: string;
};
