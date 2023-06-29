 const {it} =require("mocha")
 const cypress = require("cypress")

describe("Xpath" ,()=>{
    it("find no of products"  ,()=>{
        cy.visit('https://www.flipkart.com')
        it('finds list items', () => {
            cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
          });
    })
})


// describe ("check",()=>{

//     it("check",()=>{
//         cy.visit(window.open("this pc"))
//     })
// })