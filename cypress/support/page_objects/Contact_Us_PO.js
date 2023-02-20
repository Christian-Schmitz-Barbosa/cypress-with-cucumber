import Base_PO from './Base_PO.js';
export default class Contact_Us_PO extends Base_PO {
    elements = {
        first_name: 'input[name="first_name"]',
        last_name: 'input[name="last_name"]',
        email: 'input[name="email"]',
        comment: 'textarea',
        submit: 'input[type="submit"]'
    }

    navigateTo_Contact_Us_Page() {
        super.navigate("Contact-Us/contactus.html")
    }
    // Fill the Form
    type_First_Name_Without_Examples() {
        cy.get(this.elements.first_name)
            .type("Christian")
    }
    type_Last_Name_Without_Examples() {
        cy.get(this.elements.last_name)
            .type("Meyer")
    }
    type_Email_Without_Examples() {
        cy.get(this.elements.email)
            .type("nnheo@example.com")
    }
    type_Comment_Without_Examples() {
        cy.get(this.elements.comment)
            .type("This is a comment")
    }
    type_First_Name_With_Examples(name) {
        cy.get(this.elements.first_name)
            .type(name)
    }
    type_Last_Name_With_Examples(last_name) {
        cy.get(this.elements.last_name)
            .type(last_name)
    }

    type_Email_With_Examples(email) {
        cy.get(this.elements.email)
            .type(email)
    }
    type_Comment_With_Examples(comment, number) {
        cy.get(this.elements.comment)
            .type(comment + " " + number)
    }
    type_First_And_Last_Name_With_Examples(first_name, last_name) {
        cy.get(this.elements.first_name)
            .type(first_name)
        cy.get(this.elements.last_name)
            .type(last_name)
    }
    type_Email_And_Comment_With_Examples(email, comment) {
        cy.get(this.elements.email)
            .type(email)
        cy.get(this.elements.comment)
            .type(comment)
    }


    // Submit button for the Form
    submit_Form() {
        cy.get(this.elements.submit)
            .click()
    }

    //Validators 
    validate_If_The_Form_Is_Not_Valid() {
        cy.get("body")
            .contains("Error")
    }
    validate_If_The_Form_Is_Valid_Message() {
        cy.get("h1")
            .should("have.text", "Thank You for your Message!")
    }
    validate_Both_scenarios(message) {
        if (message == "Thank You for your Message!") {
            cy.get("h1")
                .contains(message)
        } else {
            cy.get("body")
                .contains(message)
        }
    }

}