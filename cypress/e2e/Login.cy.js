import Homepage from "./pageObjects/homepage";
import LoggedInPage from "./pageObjects/LoggedInPage";

describe("Basic Login Flow", () => {
  const homePage = new Homepage();
  const loggedInPage = new LoggedInPage();
  it("Open login page", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("Enter username", () => {
    homePage.getUsername().type("student");
  });
  it("Enter password", () => {
    homePage.getPassword().type("Password123");
  });
  it("Click on Login button", () => {
    homePage.getLoginButton().click();
  });
  it("Check login was done succesfully", () => {
    loggedInPage.getTitle().contains("Logged In Successfully");
  });

  it("Click on Log out button", () => {
    loggedInPage.getLogOutButton().click();
  });

  it("Check logout was done succesfully", () => {
    homePage.getTitle().contains("Test login");
  });
});
