Feature: Basic Flow Login

Scenario: Login

Given I open login page
Then I enter a username
Then I enter a password
Then I click on the Login button
Then I check login was done succesfully
Then I click on the Logout button
Then I check logout was done succesfully