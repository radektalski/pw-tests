export const productCartItemSelectors = {
  text: {
    title: (id: string) =>
      `div.cart_item_label >> a[data-test="item-${id}-title-link"]`,
    description: (id: string) =>
      `div.cart_item_label:has(a[data-test="item-${id}-title-link"]) >> div.inventory_item_desc`,
    price: (id: string) =>
      `div.cart_item_label:has(a[data-test="item-${id}-title-link"]) >> div.inventory_item_price`,
  },
};
