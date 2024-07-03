import HomePage from '../pageObjects/HomePage';


export default class UserAction {
    constructor() {
        this.homePage = new HomePage();
    }

doScrollHomePage(){
    this.homePage.visit();
    this.homePage.scrollToHalfway();
}

clickOnProduct(index) {
    this.homePage.clickOnProductByIndex(index);
}

clickOnRandomProduct() {
    this.homePage.getAllProductViewButtons().then((buttons) => {
        const randomIndex = Math.floor(Math.random() * buttons.length);
        cy.log(`Clicking on product at index: ${randomIndex}`);
        this.clickOnProduct(randomIndex);
    });
}

clickOnCartOnHeader(){
    this.homePage.clickCartOnHeader()

}

clickOnContactUs(){
    this.homePage.clickContactUsOnHeader()
}



}