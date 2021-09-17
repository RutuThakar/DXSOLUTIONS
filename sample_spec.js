// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('BlueStack_Validation', () => {
  it('Checkout & Order Validation', function(){
		//visiting site
		cy.visit('https://bstackdemo.com/')
		
		//Sign in to website
		cy.contains('Sign In').click()
		cy.get("#username").type("demouser{enter}")
		cy.get("#password").type("testingisfun99{enter}")
		cy.get("#login-btn").click()
		
		
		//Clicking on add to cart of iPhone 12
		cy.get('div[id=1] > p ').should('have.text','iPhone 12')
		cy.get('div[id=1] > div[class=shelf-item__buy-btn]').click()
		
		//Validating iPhone 12 is added in cart for checkout
		cy.get('div[class = float-cart__shelf-container] > div[class=shelf-item]> div[class=shelf-item__details] > p[class=title]').should('have.text','iPhone 12')
		
		//click on Checkout
		cy.get('div[class = float-cart__footer] > div[class = buy-btn]').click()
		cy.url().should('include','/checkout')
		
		//Shipping information
		cy.get("#firstNameInput").type("Rutu{enter}").should('have.value','Rutu')
		cy.get("#lastNameInput").type("Thakar{enter}").should('have.value','Thakar')
		cy.get("#addressLine1Input").type("3/35,Finchley Avenue, Glenroy{enter}").should('have.value','3/35,Finchley Avenue, Glenroy')
		cy.get("#provinceInput").type("Victoria{enter}").should('have.value','Victoria')
		cy.get("#postCodeInput").type("3046{enter}").should('have.value','3046')
		cy.get("#checkout-shipping-continue").click()
		cy.url().should('include','/confirmation')
		cy.contains("Continue Shopping »").click()
		
		//Confirming Order placement
		cy.get("#orders").click()
		cy.url().should('include','/orders')
		cy.contains("iPhone 12").should('exist')
		
		//Logout from website
		cy.contains('Logout').click()
		})
		
		
})