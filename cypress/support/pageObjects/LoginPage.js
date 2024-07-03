class LoginPage{

    setSignUpName(name){
        return cy.get('[data-qa="signup-name"]').clear().type(name)
    }

    setSignUpEmail(email){
        return cy.get('[data-qa="signup-email"]').clear().type(email)
    }

    clickSignInBtn(){
        return cy.get('[data-qa="signup-button"]').click()
    }

    setLoginEmail(email){
        return cy.get('[data-qa="login-email"]').clear().type(email)
    }

    setLoginPassword(password) {
        return cy.get('[data-qa="login-password"]').type(password); 
    }

    clickLoginBtn() {
        return cy.get('[data-qa="login-button"]').click(); 
    }

    clickLogOutBtn(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }

}

export default LoginPage