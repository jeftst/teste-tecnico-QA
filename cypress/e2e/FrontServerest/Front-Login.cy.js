describe('Pagina de Loguin', ()=>{
    beforeEach(()=>{
        cy.visit('https://front.serverest.dev')
        
    })
    it('P - Acessar com Sucesso, Deve preencher os campos de login corretamente e autenticar o usuario na pagina.',()=>{
        cy.login('jef.t@teste.com','teste123')
        cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')

    })
    it('N - Simular erro com campos em branco, deve retornar mensagem de validação de campo.',()=>{
        cy.get('[data-testid="entrar"]').click();
        cy.contains('Email é obrigatório').should('be.visible')
        cy.contains('Password é obrigatório').should('be.visible')

    })
    it('N - Simular erro com campos dados de acesso incorreto, deve retornar mensagem de validação de campo.',()=>{
        cy.login('t@1','1')
        cy.contains('Email deve ser um email válido').should('be.visible')
    })
  })