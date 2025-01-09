class LoggedInPage {
  getTitle() {
    return cy.get("[class='post-title']").contains("Logged In Successfully");
  }

  getLogOutButton() {
    return cy.get(
      'a[href="https://practicetestautomation.com/practice-test-login/"]'
    );
  }
}

export default LoggedInPage;
