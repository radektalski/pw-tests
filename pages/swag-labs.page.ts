import { BasePage } from "../engine/BasePage";
import { sauceLabsBackpack } from "../setup/data/getProducts";
import { CartComponent } from "./components/cart.component";
import { NavBarComponent } from "./components/nav-bar.component";
import { OverviewComponent } from "./components/overview.component";
import { ProductItemComponent } from "./components/product/product-item.component";
import { ProductCartItemsList } from "./components/product/product-items-list.component";
import { YourInfomrationComponent } from "./components/your-information.component";

export class SwaglabsPage extends BasePage {
  readonly productCartItems: ProductCartItemsList;
  readonly productItem: ProductItemComponent;
  readonly navBarComponent: NavBarComponent;
  readonly cartComponent: CartComponent;
  readonly yourInformationComponent: YourInfomrationComponent;
  readonly overviewComponent: OverviewComponent;

  constructor() {
    super();
    this.productCartItems = new ProductCartItemsList([sauceLabsBackpack]);
    this.productItem = new ProductItemComponent(sauceLabsBackpack);
    this.navBarComponent = new NavBarComponent();
    this.cartComponent = new CartComponent();
    this.yourInformationComponent = new YourInfomrationComponent();
    this.overviewComponent = new OverviewComponent();
  }
}

export const swaglabsPage = new SwaglabsPage();
