const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      on("after:screenshot", (details) => {
        console.log("Screenshot saved: ", details.path);
      });
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true
    },
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    video: true
  }
});
