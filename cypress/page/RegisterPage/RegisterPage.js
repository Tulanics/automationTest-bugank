Cypress.Commands.add('typeEmail', (email) =>{
    cy.get(':nth-child(2) > .input__default').type('teste@teste.com', {force: true});
})

Cypress.Commands.add('typeName', (name) =>{
    cy.get('input[name="name"]').first().type(name, { force: true });
})

Cypress.Commands.add('typepassword', (password) =>{
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste123', {force: true});
})

Cypress.Commands.add('typeRepeatedPassword', (repeatedPassword) =>{
   cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste123', {force: true});
})

Cypress.Commands.add('clickToogleAddBalance', () =>{
    cy.get('#toggleAddBalance').click({ force: true });
})

Cypress.Commands.add('clickForRegisterCount', () =>{
    cy.contains('button','Cadastrar').click();
})

Cypress.Commands.add('clickRegisterButton', () =>{
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true});
})

Cypress.Commands.add('getAccountNumber', () =>{
    const accountNumber = ""
    cy.get('input[value="Acessar"]').click();
    cy.get('#modalText').invoke('text').then(($value) => {
        accountNumber = cy.log($value).contains(/[-\d]+/g)
      })
    console.log(accountNumber)
    return accountNumber
})

Cypress.Commands.add('clickCloseModal', () =>{
    cy.get('#btnCloseModal').click();
})
//document.querySelector("#btnCloseModal")