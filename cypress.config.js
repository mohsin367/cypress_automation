const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: true,
    json: false,

    // 🔥 IMPORTANT (hide code)
    showHooks: "never",
    code: false,

    // UI improvements
    charts: true,
    reportPageTitle: "OrangeHRM Automation Report",
    inlineAssets: true,
    embeddedScreenshots: true
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    dashboardUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    adminUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});