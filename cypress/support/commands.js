// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectDropdownOption', (wrapperSelector, optionText, index) => {
    cy.get(wrapperSelector).eq(index).within(() => {
      cy.contains('span', optionText).click()
    })
  })
  Cypress.Commands.add(
    'selectAutocompleteOption',
    (inputSelector, optionText) => {
      cy.get(inputSelector)
        .should('be.visible')
        .clear()
        .type(optionText)
  
      cy.get('div[role="listbox"]')
        .should('be.visible')
        .contains(optionText)
        .click()
    }
  )
  
  