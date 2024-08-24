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

import '../page/LoginPage/LoginPage';

import '../page/RegisterPage/RegisterPage';

export function registrarUsuario(){
    
    //const password = faker.internet.password()
    cy.clickRegisterButton();
    cy.typeEmail("test@test.com");
    cy.typeName('Test');
    
    cy.typePassword("@pass123");
    cy.typeRepeatedPassword("@pass123");

    cy.clickToogleAddBalance();
    cy.clickForRegisterCount();
    //const accountNumber = cy.getAccountNumber();
    cy.clickCloseModal();



   // return accountNumber;

}


export function loginUser(){
    const userName = "test"
    const password = "pass123"

    cy.typeUsername(userName);
    cy.typePassword(password);
    cy.clickLogin();
}


