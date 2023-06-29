


import HomePage from "./Pageobjects/HomePage"

// describe("tests",()=>{
    
//     before(function(){
//         cy.fixture('example').then(function(data){
//             this.data=data
//         })
//     })

//     it("TEST1", function() {
//         const homePage = new HomePage();
        
//         cy.log("this.data", JSON.stringify(this.data));
//         cy.visit("https://rahulshettyacademy.com/angularpractice/");
//         homePage.getEditBox().type(this.data.name);
//        homePage.getGender().select(this.data.gender);

//       });
// })

describe("testHookFramworks", () => {
    beforeEach(function() {
        cy.fixture('example').then(function(data) {
          this.data = data;
          console.log("Data loaded from fixture:", this.data);
        });
      });
      
  
    it("Test 1", function() {
      cy.log("Data from fixture:", JSON.stringify(this.data));
  
      // Use this.data in the test case
    });
  
    it("Test 2", function() {
      cy.log("Data from fixture:", JSON.stringify(this.data));
  
      // Use this.data in the test case
    });
  });
  