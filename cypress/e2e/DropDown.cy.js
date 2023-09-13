describe("handle dropdowns", () => {
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
});
