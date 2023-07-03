
describe("First",()=>{
    
    it("case1",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")


        cy.get(".search-keyword").type('ca')
        
        cy.get(".product:visible").should("have.length", 4)

        cy.get(".products").find(".product").should("have.length",4)

        cy.get(":nth-child(3)> .product-action > button").click()

        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()

        // cy.contains("AD TO CART")
    })


    it("test 2",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get(".products").find(".product").each(($el, index, $list) => {

       const textval = $el.find("h4.product-name").text()

       if(textval.includes("Cashews")){
         $el.find("button").click()
       }
        })
    })



it("test 3",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get(".brand").then((element)=>{
        cy.log(element.text() )
    })
    
    cy.get(".product").as("productLocator")
    cy.get(".brand").should("have.text","GREENKART")
    cy.log( cy.get(".brand").text)
    //cy.log(logo.text())


})

it("test 4",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
      
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

    cy.get('input[type="checkbox"]').check(['option2','option3'])
})

// it("test 5",()=>{
//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
      
//     cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")

//     cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

//     cy.get('input[type="checkbox"]').check(['option2','option3'])

//     cy.get('.ui-menu-item div').each(($el,index,$list)=>{
//         if($el.text()==="India"){
//             $el.click()
//         }

//     })

        it("test 5",()=>{
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
            cy.get('#show-textbox').click()
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("be.not.visible")
        })





})