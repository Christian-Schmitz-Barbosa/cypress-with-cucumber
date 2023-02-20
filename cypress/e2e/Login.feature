
@login @regression
Feature: WebdriverUniversity - Login
    Background: Pre conditions
        # Given I navigate to the WebdriverUniversity homepage
        # When I click on the Login Page button
        Given I navigate to the WebdriverUniversity login page
        When I wait for 0 seconds


    Scenario Outline:Validate valid & invalid login credentials
        And I type the user name webdriver
        And I type the password '<password>'
        And I click on the Login User button
        Then Check the message: '<message>'

        Examples:
            | password     | message              |
            | webdriver123 | validation succeeded |
            | webdriver    | validation failed    |