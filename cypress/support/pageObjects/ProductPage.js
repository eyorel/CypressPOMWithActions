class ProductPage{
    getQuantityInput() {
        return cy.get('#quantity');
    }

    setQuantity(quantity) {
        this.getQuantityInput().clear().type(quantity);
    }

    clickAddToCart(){
        return cy.get(':nth-child(5) > .btn')
    }

    clickViewCart(){
        return cy.get('u')
    }

    
}

export default ProductPage