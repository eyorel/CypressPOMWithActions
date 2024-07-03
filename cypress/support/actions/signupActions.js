import SignupPage from "../pageObjects/SignupPage";

export default class UserAction {
    constructor() {
        this.signupPage = new SignupPage();
    }

    enterValidAccountInformation(userData){
        this.signupPage.setPassword(Cypress.env('ADMIN_PASSWORD'))
        this.signupPage.setDay(userData.dayofbirth)
        this.signupPage.setMonth(userData.monthofbirth)
        this.signupPage.setYear(userData.yearofbirth)
        this.signupPage.setName(userData.firstname)
        this.signupPage.setLastNAme(userData.lastname)
        this.signupPage.setAddress(userData.streetAddress)
        this.signupPage.setCountry(userData.country)
        this.signupPage.setState(userData.state)
        this.signupPage.setCity(userData.city)
        this.signupPage.setZipcode(userData.zipcode)
        this.signupPage.setMobile(userData.mobile)
        this.signupPage.clickCreateAccount()
        this.signupPage.clickContinueAccountCreated()
    }

}