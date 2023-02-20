import Base_PO from "./Base_PO";

export default class Login_PO extends Base_PO {
    navigateTo_Login_Page() {
        super.navigate("Login-Portal/index.html")
    }
    type_UserName(username) {
        cy.get('input[type=text]').type(username)
    }
    type_Password(password) {
        cy.get('input[type=password]').type(password)
    }
    click_Login_Button() {
        cy.get("#login-button")
            .click()
    }

}