class ContactUsPage{

    setName(name){
        return cy.get('[data-qa="name"]').clear().type(name)
    }

    setEmail(email){
        return cy.get('[data-qa="email"]').clear().type(email)
    }

    setSubject(subject){
        return cy.get('[data-qa="subject"]').clear().type(subject)
    }

    setMessage(message){
        return cy.get('[data-qa="message"]').clear().type(message)
    }

    clickSubmitMessage(){
        return cy.get('[data-qa="submit-button"]').click()
    }

    

}



export default ContactUsPage