import PaymentPage from "../pageObjects/PaymentPage";

export default class UserAction {
    constructor() {
        this.paymentPage = new PaymentPage();
    }

CompleteValidPayment(userData){
    this.paymentPage.setNameOnCard(userData.firstname)
    this.paymentPage.setCardNumber(userData.cardNumber)
    this.paymentPage.setCVC(userData.cvc)
    this.paymentPage.setExpirationMonth(userData.expirationMonth)
    this.paymentPage.setExpirationYear(userData.expirationYear)
    this.paymentPage.clickPayAndConfirmOrder()
    this.paymentPage.clickContinueAfterOrderPlaced()
}
}