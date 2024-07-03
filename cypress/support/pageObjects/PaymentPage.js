class PaymentPage{
    setNameOnCard(firstname){
        return cy.get('[data-qa="name-on-card"]').clear().type(firstname)
    }

    setCardNumber(card){ 
        return cy.get('[data-qa="card-number"]').clear().type(card)
    }

    setCVC(cvc){
        return cy.get('[data-qa="cvc"]').clear().type(cvc)
    }

    setExpirationMonth(expirationMonth){
        return cy.get('[data-qa="expiry-month"]').clear().type(expirationMonth)
    }

    setExpirationYear(expirationYear){
        return cy.get('[data-qa="expiry-year"]').clear().type(expirationYear)
    }
    
    clickPayAndConfirmOrder(){
        return cy.get('[data-qa="pay-button"]').click()
    }

    clickContinueAfterOrderPlaced(){
        return cy.get('[data-qa="continue-button"]').click()
    }

}

export default PaymentPage 