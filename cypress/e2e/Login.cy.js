import Homepage from "./pageObjects/homepage";
import LoggedInPage from "./pageObjects/LoggedInPage";

describe("First Test Case", () => {
  const homePage = new Homepage();
  const loggedInPage = new LoggedInPage();
  it("Launch  Page", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("Enter username", () => {
    homePage.getUsername().type("student");
  });
  it("Enter password", () => {
    homePage.getPassword().type("Password123");
  });
  it("Click Login button", () => {
    homePage.getLoginButton().click();
  });
  it("Check loggedin page title", () => {
    loggedInPage.getTitle().contains("Logged In Successfully");
  });

  it("Click Log out button", () => {
    loggedInPage.getLogOutButton().click();
  });

  it("Check logout succesfully", () => {
    homePage.getTitle().contains("Test login");
  });
});
