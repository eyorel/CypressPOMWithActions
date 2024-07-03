class HomePage {
    visit() {
        const baseUrl = Cypress.env('BASE_URL'); 
        return cy.visit(`${baseUrl}`);
      }

    scrollToHalfway(){
        cy.window().then((win) => {
            win.scrollTo(0, win.document.body.scrollHeight / 2);
        }); 
    }

    getAllProductViewButtons() {
        return cy.get('.product-image-wrapper .choose .nav li a');
    }

    clickOnProductByIndex(index) {
        this.getAllProductViewButtons().eq(index).click();
    }

    clickCartOnHeader(){
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    }

    clickContactUsOnHeader(){
        return cy.get(':nth-child(9) > a').click()
    }

}   

export default HomePage