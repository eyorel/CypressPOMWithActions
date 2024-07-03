class CheckoutPage{
    clickGoToCheckout(){
        return cy.get('.col-sm-6 > .btn')
    }

    clickRegister(){
        return cy.get('.modal-body > :nth-child(2) > a > u')
    }

    enterOrderComment(comment){
        return cy.get('.form-control').clear().type(comment)
    }

    clickPlaceOrder(){
        return cy.get(':nth-child(7) > .btn').click()
    }
}
export default CheckoutPage