// describe("data", () => {
//     it("to check", () => {
//       cy.visit("https://www.cypress.io/");
//       assert(1).to.equal(1); 
//     });
//   });

import chai from 'chai';

const assert = chai.assert;

describe("My test suite", () => {
  //   it("My test case", () => {
  //       cy.visit("https://www.cypress.io/");
  //       cy.wait(2000)
       
  // });
  it('verify title-negative!', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    // cy.title().should('not.eq',"OrangeHRM1234")
    cy.wait(1000)
      cy.title().should('eq',"OrangeHRM1234")
      // expect(1).to.equal(2)
    })
});


// afterEach(() => {
//   // Your test cleanup code here

//   // Call cy.postToSlack to post messages to Slack
//   // cy.postToSlack({
//   //   text: 'Your custom message here',
//   // });
// });