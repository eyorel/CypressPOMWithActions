class SignupPage{

    setPassword(password){
        return cy.get('[data-qa="password"]').clear().type(password)
    }

    setDay(day){
        return cy.get('[data-qa="days"]').select(day)
    }

    setMonth(month){
        return cy.get('[data-qa="months"]').select(month)
    }

    setYear(year){
        return cy.get('[data-qa="years"]').select(year)
    }

    setName(name){
        return cy.get('[data-qa="first_name"]').clear().type(name)
    }

    setLastNAme(lname){
        return cy.get('[data-qa="last_name"]').clear().type(lname)
    }

    setAddress(address){
        return cy.get('[data-qa="address"]').clear().type(address)
    }

    setCountry(country){
        return cy.get('[data-qa="country"]').select(country)
    }

    setState(state){
        return cy.get('[data-qa="state"]').clear().type(state)
    }

    setCity(city){
        return cy.get('[data-qa="city"]').clear().type(city)
    }

    setZipcode(zipcode){
        return cy.get('[data-qa="zipcode"]').clear().type(zipcode)
    }

    setMobile(mobile){
        return cy.get('[data-qa="mobile_number"]').clear().type(mobile)
    }

    clickCreateAccount(){
        return cy.get('[data-qa="create-account"]').click()
    }

    clickContinueAccountCreated(){
        return cy.get('[data-qa="continue-button"]').click()
    }

}

export default SignupPage