///<reference types="cypress" />

// // import "cypress-iframe"
import HomePage from "./Pageobjects/HomePage";
// import {url} from "../../cypress.json";

describe("testHookFramworks",()=>{

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    // it("test 1",function(){
    //     const homePage = new HomePage();
    //     cy.log("this.data", JSON.stringify(this.data))

    //     cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
    //     // cy.get('input[name="name"]:nth-child(2)').type(this.data.name);

    //     homePage.getEditBox().type(this.data.name);
    //      homePage.getGender().select(this.data.gender);


    //     // cy.get(':nth-child(1) > .form-control').type(this.data.name)

    //     // cy.get('select').select(this.data.gender);

    //     // cy.get('#exampleFormControlSelect1').select(this.data.gender)

    // })

    it("TEST1", function() {
        const homePage = new HomePage();
        
        cy.log("this.data", JSON.stringify(this.data));
        cy.visit(Cypress.env("url"));

        
        // cy.visit("https://rahulshettyacademy.com/angularpractice/");
        
        homePage.getEditBox().type(this.data.name);
       homePage.getGender().select(this.data.gender);

      });

    it("TEST2", function() {
        const homePage = new HomePage();
        cy.log("this.data", JSON.stringify(this.data));

        // cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.visit(Cypress.env("url"));
        
     //   // cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
      //  // cy.get('#exampleFormControlSelect1').select(this.data.gender);

        
     //   // cy.get('input[name="name"]:nth-child(2)').should("have.attr",'minlength','2')
     //   // cy.get(':nth-child(4) > .ng-pristine').should("have.value",this.data.name)

     //   // cy.get('#inlineRadio3').should("be.disabled")
   
      //  // cy.get(':nth-child(2) > .nav-link').click()


        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);

        
        homePage.getEditBox().should("have.attr",'minlength','2')
        homePage.getToWayDataBinding().should("have.value",this.data.name)

        homePage.getEnterpreneaur().should("be.disabled")
   
        homePage.getshopTab().click()

       const array1 = this.data.productName
       
       array1.forEach((ele)=>{
        cy.selectProduct(ele)
       })
       

      
       homePage.getCheckoutButton().click()
       var sum = 0;
       cy.get('tr td:nth-child(4) strong').each(function($el ,index, $list){

        const amount=$el.text()
        var res = amount.split(" ")
            res=res[1].trim()

            sum=Number(sum)+ Number(res)
            // sum=parseInt(sum)+ parseInt(res)
        
        }).then(()=>{
            cy.log("sum",sum);
            
       })
       

       cy.get('h3 > strong').each(function($el ,index, $list){

        const Totalamount=$el.text()
        var res = Totalamount.split(" ")
          var  ttl=res[1].trim()
            cy.log("Total",ttl);
            expect(Number(ttl)).to.equal(sum)
            // cy.log("Total",res);
            // cy.get('h3 > strong'). 
            
       })
       



    //    cy.get('tbody > :nth-child(2) > :nth-child(4) > strong')
    //    cy.get('h3 > strong')

       homePage.getCheckoutButtonforpay().click()
       homePage.getCountry().type("India")
       cy.wait(5000) 
      homePage.getCountryIndia().click()
     homePage.getselectCheckBox().click()
      homePage.getclickperchesebutton().click()

      cy.get('.alert').then((ele)=>{
        const actualText = ele.text();
        expect(actualText.includes("Success!")).to.be.true

      })

        
      });


})