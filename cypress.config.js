const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'sq11n6',
  reporter: 'mochawesome',
  env: {
    shell: "powershell.exe",
    // CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
    type: "module",
  },
});
