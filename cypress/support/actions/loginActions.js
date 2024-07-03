import LoginPage from "../pageObjects/LoginPage";
import { generateRandomEmail } from "../utils"

export default class UserAction {
    constructor() {
        this.loginPage = new LoginPage()
    }

    DoValidSignUp(userData){
        const randomEmail = generateRandomEmail();
        cy.wrap(randomEmail).as('randomEmail'); 

        this.loginPage.setSignUpName(userData.firstname)
        this.loginPage.setSignUpEmail(randomEmail)
        this.loginPage.clickSignInBtn()
    }

    doLoginWithStoredEmail(password) {
        cy.get('@randomEmail').then((email) => {
            this.loginPage.setLoginEmail(email);
            this.loginPage.setLoginPassword(Cypress.env('ADMIN_PASSWORD'));
            this.loginPage.clickLoginBtn();
        });
}

    doLogOut(){
        this.loginPage.clickLogOutBtn()
    }

}