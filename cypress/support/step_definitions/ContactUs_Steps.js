import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactUs_page = new Contact_Us_PO();


When(`I type a first name`, () => {
    contactUs_page.type_First_Name_Without_Examples()
})
When(`I type a last name`, () => {
    contactUs_page.type_Last_Name_Without_Examples()
})
When(`I enter an email address`, () => {
    contactUs_page.type_Email_Without_Examples()
})
When(`I type a Comment`, () => {
    contactUs_page.type_Comment_Without_Examples()
})
When(`I click on the submit button`, () => {
    contactUs_page.submit_Form()
})
When(`I type a specific first name {string}`, (first_name) => {
    contactUs_page.type_First_Name_With_Examples(first_name)
})
When(`I type a specific last name {string}`, (last_name) => {
    contactUs_page.type_Last_Name_With_Examples(last_name)
})
When(`I type a specific email address {string}`, (email) => {
    contactUs_page.type_Email_With_Examples(email)
})
When(`I type a specific word {string} and number {int} within the comment input field`, (comment, number) => {
    contactUs_page.type_Comment_With_Examples(comment, number)
})
Then(`I should be presented with a successful contact us submission message`, () => {
    contactUs_page.validate_If_The_Form_Is_Valid_Message()
})

Then(`I should be presented with a unsuccessful contact us submission message`, () => {
    contactUs_page.validate_If_The_Form_Is_Not_Valid()
})

When(`I type a first name {word} and a last name {string}`, (first_name, last_name) => {
    contactUs_page.type_First_And_Last_Name_With_Examples(first_name, last_name)
})
When(`I type a specific {string} and a comment {string}`, (email, comment) => {
    contactUs_page.type_Email_And_Comment_With_Examples(email, comment)
})
Then(`I should be presented with header text {string}`, (message) => {
    contactUs_page.validate_Both_scenarios(message)
})