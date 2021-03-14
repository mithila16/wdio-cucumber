const { Given, When, Then } = require('cucumber');
const sample1Page = require('../pages/sample.page');
const page = new sample1Page();

Given(/^I am launching website$/, () => {
    page.lauchApplication();
});

When(/^I search for product$/, () => {
    page.searchTheProduct();
});

Then(/^I select the product$/, () => {
    page.selectProductToBuy();
});

Then(/^I change the quantity and size and color$/, () => {
    page.changeTheQuantityAndSizeAndColor();
});

Then(/^I add it to cart$/, () => {
    page.addToCart();
});
