import ContactUsPage from "../pageObjects/ContactUsPage";

export default class UserAction {
    constructor() {
        this.contacusPage = new ContactUsPage();
    }

sendContactUsMessage(userData){
    cy.get('@randomEmail').then((email) => {
        this.contacusPage.setEmail(email);
    })
    this.contacusPage.setName(userData.firstname)
    this.contacusPage.setSubject(userData.subject)
    this.contacusPage.setMessage(userData.message)
    this.contacusPage.clickSubmitMessage()
    
}
}