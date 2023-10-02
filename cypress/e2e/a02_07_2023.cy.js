// describe("data", () => {
//     it("to check", () => {
//       cy.visit("https://www.cypress.io/");
//       assert(1).to.equal(1); 
//     });
//   });

import chai from 'chai';

const assert = chai.assert;

describe("My test suite", () => {
    it("My test case", () => {
      cy.visit("www.google.com");
      cy.wait(2000)
      // expect(1).to.equal(2)
        
      });
      it('verify title-negative!', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('not.eq',"OrangeHRM1234")
        cy.wait(1000)
      // expect(1).to.equal(2)
    })
});
