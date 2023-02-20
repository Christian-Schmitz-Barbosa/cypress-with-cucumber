import { Before, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";
// const url = 'http://www.webdriveruniversity.com/index.html'
const HOMEPAGE = new Homepage_PO();


Before(() => {
    cy.log("Executing commands inside Homepage steps")
})

Given("I navigate to the WebdriverUniversity homepage", () => {
    HOMEPAGE.navigateToHomepage()
})
When(`I click on the contact us button`, () => {
    HOMEPAGE.clickOn_contactUs_Button()
})
When(`I click on the Login Page button`, () => {
    HOMEPAGE.clickOn_login_Button()
})