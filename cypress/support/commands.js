// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import "cypress-iframe";

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

//   import { After } from 'cypress';

const SLACK_TOKEN = Cypress.env("SLACK_TOKEN");
const CHANNEL_ID =Cypress.env("SLACK_CHHINAL_ID");
const slackWebHookURL = Cypress.env("SLACK_WEBHOOK_URL");
import {pushToSlack} from "./slack"

  afterEach(() => {
    console.log('In afteEach ');
  })

// const slackWebHookURL = Cypress.env("SLACK_WEBHOOK_URL");

// globalThis.errorMsgList = [];

// Cypress.on("test:after:run",  (test, runnable) => {
//   if (runnable.state === "failed") {
//     const msg = `Attention <!channel> :rotating_light: :rotating_light: Test is failing with error: ${runnable.err?.message} at scenario "${runnable.title}"!`;
//     globalThis.errorMsgList.push(msg);
//   }

//   globalThis.errorMsgList.forEach((element)=> {
//     console.log(`element == ${element}`);

//          cy.request({
//               method: "POST",
//               url: slackWebHookURL,
//               body: { "text": element },
//       }).then((response)=>{
//         console.log("response",JSON.stringify(response))
//         if (response.status !== 200) {
//              console.error("Failed to send message to Slack. Status code: ", response.status);
//            } else {
//           console.log("Message sent to Slack successfully.");
//         }
//       })
//   })
// });



// globalThis.errorList = [];

// Cypress.on('test:after:run', (test, runnable) => {

//   console.log(`runnable == ${runnable.state}`);
//   if (runnable.state === 'failed') {
//     console.log("in cy.on")
//     const slackMessage = {
//       text: `Attention <!channel> :rotating_light: :rotating_light: Test is failing with error: ${runnable.err?.message} at scenario "${runnable.title}"!`
//     }
//     globalThis.errorList.push(slackMessage);
//     console.log("slackMessage",slackMessage)
//     cy.postToSlack(slackMessage)
//   }
//   console.log('globalThis.errorList1',globalThis.errorList)
// });

// Cypress.Commands.add('postToSlack', (message) => {
  
//   if (!slackWebHookURL) {
//     console.log('The slackWebHookURL environment variable is not set.');
//     return;
//   }
//   console.log('globalThis.errorList',globalThis.errorList)

//   const requestOptions = {
//     method: 'POST',
//     url: slackWebHookURL,
//     body: message,
//   };

  
//   cy.request(requestOptions).then((response) => {
//     console.log('Response from Slack:', response);
//   });
// });

/////////////////////////




const errorMsgList =  [];

after(async ()=>{
  console.log("in After block")
  await pushToSlack(CHANNEL_ID,errorMsgList)
  console.log("pj")
})


Cypress.on('fail', (error, runnable) => {
  if (error) {
    const msg = {
      scenarioName: runnable.title,
      "error":error.message,
    };
    errorMsgList.push(msg);
  }
  console.log('errorMsgList fail', errorMsgList)
  console.log('error', error)
  // debugger
  // we now have access to the err instance
  // and the mocha runnable this failed on
  throw error // throw error to have test still fail
})




