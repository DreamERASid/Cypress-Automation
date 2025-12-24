// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-mochawesome-reporter/register";

// Optional: attach only failed test screenshots to Mochawesome
import "./commands";
import "cypress-mochawesome-reporter/register";

// Attach only failed test screenshots to Mochawesome HTML report
Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    // Screenshot file name format (Cypress default)
    const screenshotFile = `${runnable.parent.title} -- ${test.title} (failed).png`;
    
    // Add context to Mochawesome report
    Cypress.mochawesome.addContext({
      test,
      context: `../screenshots/${Cypress.spec.name}/${screenshotFile}`
    });
  }
});
