/// <reference types="Cypress" />

export default class Base_PO {
    // baseUrl = "http://www.webdriveruniversity.com/"
    navigate(path) {
        cy.fixture("config.json")
            .then(data => {
                cy.visit(data.baseUrl + path)
            })
    }
    getPageTitle() {
        return cy.title()
    }
}

