Feature: Login Test

Scenario: Login

Given I open login page
Then I enter username
Then I enter password
Then I click on Login button
Then Check login was done succesfully
Then I click on Logout button
Then Logout was done succesfully