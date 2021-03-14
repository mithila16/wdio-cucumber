const dataFile = require('../utils/data.js');
class samplePage {
    get searchBox() { return $('#search_query_top'); }
    get searchIcon() { return $('[id="searchbox"]>button'); }
    get selectProduct() { return $('[class="product_list grid row"]>li>div>div:nth-child(1)'); }
    get selectProductSize() { return $('[class="box-info-product"]>div:nth-child(2) [id="attributes"] [id="group_1"] [value="3"]'); }
    get selectColor() { return $('[class="box-info-product"]>div:nth-child(2) [id="attributes"] [id="color_to_pick_list"]>li:nth-child(2)'); }
    get addToCartButton() { return $('[id="add_to_cart"]>button'); }
    get successMessage() { return $('[id="layer_cart"]>div>div:nth-child(1)>h2'); }
    get productPrice() { return $('#our_price_display'); }
    get proceedToCheckoutText() { return $('.//*[contains(text(), "Proceed to checkout")]'); }
    get productQuantityUpButton() { return $('.//*[@id="quantity_wanted_p"]//a[2]'); }

    lauchApplication() {
        console.log('******* Step 1: Launching the Application *******')
        browser.url(dataFile['applicationUrl'])
        browser.maximizeWindow()
    }
    searchTheProduct() {
        console.log('******* Step 2: Searching the Product *******')
        expect(this.searchBox).toBeDisplayed()
        this.searchBox.waitForExist()
        this.searchBox.isEnabled()
        this.searchBox.setValue("T-Shirts")
        browser.pause(500)
        browser.waitUntil(() => this.searchIcon.isClickable())
        this.searchIcon.click()
    }
    selectProductToBuy() {
        console.log('******* Step 3: Selecting the Product *******')
        this.selectProduct.waitForExist()
        expect(this.selectProduct).toBeDisplayed()
        this.selectProduct.click()
    }
    changeTheQuantityAndSizeAndColor() {
        console.log('******* Step 4: Increasing the Product Quantity *******')
        this.productPrice.scrollIntoView()
        browser.pause(1000)
        this.productQuantityUpButton.waitForDisplayed()
        browser.pause(1000)
        console.log('******* Step 5: Selecting the Product Size *******')
        this.productQuantityUpButton.click()
        this.selectProductSize.waitForDisplayed({ reverse: true });
        browser.pause(1000)
        this.selectProductSize.click()
        console.log('******* Step 6: Selecting the Product Color *******')
        browser.pause(1000)
        this.selectColor.click()
        browser.pause(1000)
    }
    addToCart() {
        console.log('******* Step 7: Adding the Product to Cart *******')
        this.addToCartButton.waitForDisplayed()
        this.addToCartButton.click()
        browser.pause(2000)
        this.successMessage.waitForDisplayed()
        const successCartMessage = this.successMessage.getText()
        expect(this.successMessage).toHaveTextContaining('Product successfully added to your shopping cart', { ignoreCase: true })
        //enable below line to get failed screenshot in report 
        //expect(this.successMessage).toHaveTextContaining('Z', { ignoreCase: true })
        expect(this.proceedToCheckoutText).toHaveTextContaining('Proceed to checkout', { ignoreCase: true })
        console.log('******* ' + successCartMessage + ' and ready for ' + this.proceedToCheckoutText.getText() + ' *******')
    }
}

module.exports = samplePage;
