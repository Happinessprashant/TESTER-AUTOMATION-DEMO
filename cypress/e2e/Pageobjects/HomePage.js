class HomePage{

getEditBox(){
    return cy.get('input[name="name"]:nth-child(2)')
}

getToWayDataBinding(){
   return cy.get(':nth-child(4) > .ng-pristine')
}
getGender(){
  return cy.get('select')
  
}

getEnterpreneaur(){
  return  cy.get('#inlineRadio3')
}

getshopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}

getCheckoutButton(){
  return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

getCheckoutButtonforpay(){
 return  cy.get(':nth-child(4) > :nth-child(5) > .btn')
}

getCountry(){
 return cy.get('#country')
}

getCountryIndia(){
  return cy.get('.suggestions > ul > li > a')
}

getselectCheckBox(){
  return cy.get('.checkbox > label')
}

getclickperchesebutton(){
  return cy.get('.ng-untouched > .btn')
}


}

export default HomePage;