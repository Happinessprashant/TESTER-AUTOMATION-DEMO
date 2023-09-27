

const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'sq11n6',
  reporter: 'mochawesome',

  e2e: {
    env: {
      "shell": "powershell.exe",
      CYPRESS_RECORD_KEY : process.env.CYPRESS_RECORD_KEY,
      SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
      CYPRESS_ENVIRONMENT: "local"
     
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
    type: "module",
  },
});