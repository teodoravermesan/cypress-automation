const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  // video: true,
  // retries: 1,
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: "Test Execution Report",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
    },
    testIsolation: false,
    specPattern: "cypress/e2e",
    supportFile: false,
  },
});
