const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const { default: Login_PO } = require("../page_objects/Login_PO");


const LOGIN = new Login_PO()
Given(`I navigate to the WebdriverUniversity login page`, () => {
    LOGIN.navigateTo_Login_Page("");
})
When(`I type the user name {word}`, (user_name) => {
    LOGIN.type_UserName(user_name)
})

When(`I type the password {string}`, (password) => {
    LOGIN.type_Password(password)
})

When(`I click on the Login User button`, () => {
    stub = cy.stub();
    cy.on("window:alert", stub)
    LOGIN.click_Login_Button()
})

Then(`Check the message: {string}`, (message) => {
    expect(stub).to.have.been.calledWith(message);
})