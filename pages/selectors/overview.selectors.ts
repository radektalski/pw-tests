export const overviewSelectors = {
  text: {
    paymentInformation: '[data-test="payment-info-value"]',
    shippingInformation: '[data-test="shipping-info-value"]',
    totalPrice: '[data-test="total-label"]',
  },
  buttons: {
    finishButton: '[data-test="finish"]',
  },
  checkoutCompleted: {
    header: '[data-test="complete-header"]',
    message: '[data-test="complete-text"]',
  },
};
