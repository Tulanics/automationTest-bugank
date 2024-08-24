Cypress.Commands.add('typeUsername', (username) =>{
    cy.get('input[name="email"]').first().type(username);
})

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('input[name="password"]').first().type(password);
})

Cypress.Commands.add('clickLogin', () =>{
    cy.contains('button', 'Acessar').click();
})

Cypress.Commands.add('getAccount', () =>{
    cy.get('input[value="Acessar"]').click();
    cy.get('#modalText').invoke('text').then(($value) => {
        cy.log($value).contains(/[-\d]+/g)
      })
    cy.get(btnCloseModal)
})