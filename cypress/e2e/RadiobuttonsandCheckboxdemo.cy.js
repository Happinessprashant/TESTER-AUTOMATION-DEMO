// const { describe } = require("mocha");

describe("checkbox UI elements",()=>{
   
    it("checking radio buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        cy.get("input#other").should('be.visible')


        cy.get("input[type=radio]").should("be.visible")

        // selecting radio buttons

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").check().should('be.checked')

        // cy.get("input#other").check().should('be.checked')

    })


})

// Cypress.Commands.add('getApiResponse', (url) => {
//     return cy.request(url).then((response) => {
//       // Extract the desired value from the response
//       const value = response.body.someProperty;
      
//       // Resolve the value using cy.wrap()
//       return cy.wrap(value);
//     });
//   });

//   it('should retrieve the value from the API response', () => {
//     cy.getApiResponse('https://api.example.com/data').then((value) => {
//       // Access the resolved value
//       cy.log(value);
      
//       // Continue with assertions or actions using the value
//     });
//   });
  