import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open login page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

Then("I enter a username", () => {
  cy.get("input[name='username']").type("student");
});

Then("I enter a password", () => {
  cy.get("input[name='password']").type("Password123");
});

Then("I click on the Login button", () => {
  cy.get("#submit").click();
});

Then("I check login was done succesfully", () => {
  cy.get("[class='post-title']").contains("Logged In Successfully");
});

Then("I click on the Logout button", () => {
  cy.get(
    'a[href="https://practicetestautomation.com/practice-test-login/"]'
  ).click();
});

Then("I check logout was done succesfully", () => {
  cy.get("#login").contains("Test login");
});
