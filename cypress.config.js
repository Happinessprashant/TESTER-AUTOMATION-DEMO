const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sq11n6',
  reporter: 'mochawesome',
    "env": {
      "shell": "powershell.exe"
    }
  ,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
