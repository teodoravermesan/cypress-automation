import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open login page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

Then("I enter username", () => {
  cy.get("input[name='username']").type("student");
});

Then("I enter password", () => {
  cy.get("input[name='password']").type("Password123");
});

Then("I click on Login button", () => {
  cy.get("#submit").click();
});

Then("Check login was done succesfully", () => {
  cy.get("[class='post-title']").contains("Logged In Successfully");
});

Then("I click on Logout button", () => {
  cy.get(
    'a[href="https://practicetestautomation.com/practice-test-login/"]'
  ).click();
});

Then("Logout was done succesfully", () => {
  cy.get("#login").contains("Test login");
});
