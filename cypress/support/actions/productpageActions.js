import ProductPage from '../pageObjects/ProductPage';

export default class UserAction {
    constructor() {
        this.productPage = new ProductPage();
    }

setProductQuantity(quantity) {
    this.productPage.setQuantity(quantity);
}

clickOnAddToCart(){
this.productPage.clickAddToCart().click()
}

clickOnViewCart(){
this.productPage.clickViewCart().should('be.visible').click()
}

clickOnGoToCheckout(){
this.productPage.clickGoToCheckout().click()
}

}