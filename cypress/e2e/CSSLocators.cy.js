// const { describe } = require("mocha");


// describe('CssLocators',()=>{

    // it("test1",()=>{
    //     cy.visit("https://www.flipkart.com")
        
    //     cy.get("#Search_query_top").type("T-Shirts")
    //     cy.get("[name='submit_search]").click()

    //     cy.get(".lighter").contains("T-Shirts")
    // }
    // )
    describe('The Home Page', () => {
        it('successfully loads', () => {
          cy.visit('http://localhost:3000/') // change URL to match your dev URL
          cy.title().should('eq',"React App")
          cy.url().should('contain',"http://localhost:3000/")
          cy.contains("button","Sign").should("contain","Sign Up")


          if( cy.contains("button","Sign").should("contain","Sign Up")){

          }
        })
      })

//})