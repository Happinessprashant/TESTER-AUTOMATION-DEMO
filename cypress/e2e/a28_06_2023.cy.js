// const { expect } = require("chai");
// const { describe } = require("mocha");
///<reference types="cypress-iframe" />

import "cypress-iframe"

describe("test",()=>{

    it("test1", ()=>{
        // cy.visit("https://quclickacademy.com/practice.php") 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        // cy.get("#alerbtn").click()
        // cy.get('[value="confirm"]').click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("hello , share practice page and share your knowledge")
        })

        cy.get("#opentab").invoke("removeAttr","target").click()


        // cy.url("https://rahulshettyacademy.com/AutomationPractice/").should("include",'quclickacademy')
        // cy.go("back")

    })

        it("test2", ()=>{
            // cy.visit("https://quclickacademy.com/practice.php") 
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
            
            cy.get("tr td:nth-child(2)").each(($el ,index , $list)=>{

                const text = $el.text()
                if(text.includes("Python")){

                    cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    {
                        const priceText = price.text()
                        expect(priceText ).to.equal("25")
                    }
                    })

                }
            })
        })

        it("test3", ()=>{
            // cy.visit("https://quclickacademy.com/practice.php") 
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        

                // cy.get('div.mouse-hover-content').invoke("show")
                cy.contains("Top").click({force:true})
                cy.url().should("include","top")
        })

        it("test4", ()=>{
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
            
            cy.get("#opentab").then(function(e1){
                const url=e1.prop("href")
                cy.log("url",url)
                cy.visit(url) 

            })
        })

        // it("test5", ()=>{

        //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        //   //  // cy.visit("https://www.rahulshettyacademy.com/")
          
        //   //  // cy.frameLoaded("#courses-iframe")
        //     cy.frameLoaded("#courses-iframe", { url: 'https://www.rahulshettyacademy.com/' })
        //   //  // cy.get('#courses-iframe')
            
        //   //  // cy.iframe('#courses-iframe').find("a[href*='mentorship']").eq(0).click()

        //    // // cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //    // // cy.iframe().find(".nav-outer  .main-menu .navbar-collapse  .navigation .current  a[href*='mentorship']").click()

        //   //  // cy.iframe('#courses-iframe').find("h1.pricing-title").should("have.lengthOf",2)
        //  //   // cy.iframe().find("h1.pricing-title").should("have.length",2)
        //     cy.get('#courses-iframe').then(function($iframe){
        //         let iframeBody = $iframe.contents().find('body')
        //         cy.wrap(iframeBody).find("a[href*='mentorship']").eq(0).click()
        //         .then((res)=>{
        //             cy.log("res",res)
        //           //  // cy.wrap(res).find("h1.pricing-title").should("have.lengthOf",2)
        //         })
                 
        //       //  // cy.wrap(iframeBody).find("h1.pricing-title").should("have.lengthOf",2)
        //     })


          

            
        // })

        // it("test5", ()=>{
        //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        //     // cy.visit("https://www.rahulshettyacademy.com/")
          
        //     cy.frameLoaded("#courses-iframe")
        //     cy.get('#courses-iframe')
                
        //     cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //     // cy.iframe().find(".nav-outer  .main-menu .navbar-collapse  .navigation .current  a[href*='mentorship']").click()

        //     cy.iframe().find("h1.pricing-title").should("have.lengthOf",2)
        //     // cy.iframe().find("h1.pricing-title").should("have.length",2)
            
        // })


        // it("test9",()=>{
        //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

        //     cy.frameLoaded("#courses-iframe")
        //     // cy.iframe().get('#show-textbox')
           
        //     cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //     cy.iframe().find("h1[class*='pricing-title']").should("be.eq",2 )
        // })

}) 