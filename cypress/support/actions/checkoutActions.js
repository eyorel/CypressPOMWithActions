import CheckoutPage from '../pageObjects/CheckoutPage'

export default class UserAction {
    constructor() {
        this.checkoutPage = new CheckoutPage()
    }

clickOnCheckout(){
    this.checkoutPage.clickGoToCheckout().click()
}

clickOnRegister(){
    this.checkoutPage.clickRegister().click({ force: true });
}

clickOnPlaceOrder(userData){
    this.checkoutPage.enterOrderComment(userData.comment)
    this.checkoutPage.clickPlaceOrder()
}

}