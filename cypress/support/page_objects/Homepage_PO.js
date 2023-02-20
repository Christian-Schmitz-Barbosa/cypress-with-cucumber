import Base_PO from "./Base_PO";

export default class Homepage_PO extends Base_PO {
    navigateToHomepage() {
        super.navigate("")
    }

    clickOn_contactUs_Button() {
        cy.clickAndOpen_InSameTab('#contact-us')
    }
    clickOn_login_Button() {
        cy.clickAndOpen_InSameTab('#login-portal')
    }

}