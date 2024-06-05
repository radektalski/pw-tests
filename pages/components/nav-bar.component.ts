import { translationsData } from "setup/translations/translations";
import { ButtonElement } from "../elements/button-element";
import { TextElement } from "../elements/text-element";
import { cartSelectors } from "../selectors/cart.selectors";
import { navBarSelectors } from "../selectors/nav-bar.selectors";

export class NavBarComponent {
  readonly cartButton: ButtonElement;
  readonly cartTitle: TextElement;

  constructor() {
    this.cartButton = new ButtonElement(navBarSelectors.buttons.cart);
    this.cartTitle = new TextElement(cartSelectors.text.title);
  }

  async clickCartButton(): Promise<void> {
    await this.cartButton.click();
    await this.cartTitle.toHaveText(translationsData.YOUR_CARD);
  }
}
