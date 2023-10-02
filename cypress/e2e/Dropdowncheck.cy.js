// const { describe } = require("mocha");



  describe("handle dropdowns", ()=>{
    it("Dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        // Use the "select" method to select an option by its value or text
        cy.get("#zcf_address_country").select("Italy");
        // Assert that the selected option has the expected value
        cy.get("#zcf_address_country").should("have.value", "Italy");
        // Add an event listener to handle uncaught exceptions
        cy.on("uncaught:exception", (err, runnable) => {
            // Log the error message to the Cypress console
            console.error("Uncaught Exception:", err.message);
            // Return false to prevent Cypress from failing the test
            return false;
        });
    });

    it("Dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container")
        .should("have.text","Italy")
       })

    it(" Auto suggest Dropdown ",()=>{
        cy.visit("https://www.wikipedia.org/")


       cy.get("#searchInput").type(`Delhi{enter}`)

        // cy.get(".suggestion-title").contains("Delhi University").click()

       })

    it(" Auto suggest Dropdown ",()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("cypress automation")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length',12)
        cy.get("div.wM6W7d>span").each(($el , index,$list)=>{
            if($el.text()=='cypress automation jobs'){
                cy.wrap($el).click()
            }
        })
        cy.get("#APjFqb").should('have.value','cypress automation jobs')

       })




  })