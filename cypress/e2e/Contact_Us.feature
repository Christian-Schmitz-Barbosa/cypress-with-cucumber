@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page
    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a Comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a Comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "bob@example.com"
        And I type a specific word "hello123" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a specific '<emailAdress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAdress           | comment                  | message                      |
            | John      | Jones    | John@example.com      | This is a comment        | Thank You for your Message!  |
            | Mia       | Carter   | MiaCarter@example.com | This is a second comment | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson          | This scenario is wrong   | Error: Invalid email address |

