import Homepage from "./pageObjects/homepage";
import LoggedInPage from "./pageObjects/LoggedInPage";

describe("Basic Login Flow", () => {
  const homePage = new Homepage();
  const loggedInPage = new LoggedInPage();
  it("I Open login page", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("I enter username", () => {
    homePage.getUsername().type("student");
  });
  it("I enter password", () => {
    homePage.getPassword().type("Password123");
  });
  it("I click on Login button", () => {
    homePage.getLoginButton().click();
  });
  it("I check login was done succesfully", () => {
    loggedInPage.getTitle().contains("Logged In Successfully");
  });

  it("I click on Log out button", () => {
    loggedInPage.getLogOutButton().click();
  });

  it("I check logout was done succesfully", () => {
    homePage.getTitle().contains("Test login");
  });
});
