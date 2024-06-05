export const productItemSelectors = {
  text: {
    title: (id: string) => `[id="item_${id}_title_link"]`,
  },
  buttons: {
    addToCart: (name: string) => `[id="add-to-cart-${name}"]`,
  },
};
