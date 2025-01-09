class Homepage {
  getUsername() {
    return cy.get("input[name='username']");
  }

  getPassword() {
    return cy.get("input[name='password']");
  }

  getLoginButton() {
    return cy.get("#submit");
  }

  getTitle() {
    return cy.get("#login");
  }
}

export default Homepage;
