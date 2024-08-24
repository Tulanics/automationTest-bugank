import '../../page/LoginPage/LoginPage'
import { registrarUsuario } from  '../../support/commands'

describe('LOGIN USER TESTS', () => {

    beforeEach(()=>{
       cy.visit('https://bugbank.netlify.app/')
    })
  
    it('Login de usuário com dados válidos', () => {
        
        //const accountNumber = registrarUsuario();
        registrarUsuario();
        cy.typeUsername('test@test.com');
        cy.typePassword('Teste123');
        cy.clickLogin();
        cy.contains('#textName', 'test');

        //return accountNumber
    })
  
  
  
  })