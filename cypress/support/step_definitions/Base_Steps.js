import { Before, After, When, Then } from '@badeball/cypress-cucumber-preprocessor/lib/methods'

Before(() => {
    cy.log("Executes before each Scenario/Test")
    cy.clearLocalStorage();
})
Before({ tags: "@smoke" }, () => {
    cy.log("Executes before each Scenario/Test123")
})

After(() => {
    cy.log("Executes after each Scenario/Test");
})

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000)
})