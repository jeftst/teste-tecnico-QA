
  describe('Exclusão de Usuário, navegação desde a tela de login até a listagem e exclusão de usuario.', () => {
    const userEmail = 'maria.silva@example.com';
     
    beforeEach(() => {
        cy.visit('https://front.serverest.dev')
        cy.login('jef.t@teste.com','teste123')
        cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')
      
      cy.get('[data-testid="listar-usuarios"]').click();
    });
  
    it('P - Excluir o usuário com e-mail maria.silva@example.com', () => {
      // Localiza a linha correspondente ao e-mail e clica no botão de excluir
      cy.contains(userEmail)
        .parents('tr') 
        .find('button')
        .contains('Excluir') 
        .click();
  
  
      // Verifica se o usuário foi excluído com sucesso
      cy.contains(userEmail).should('not.exist');
    });
  });

  describe('Exclusão de Usuário, direto a pagina de listagem e exclusão de usuario.', () => {
    const userEmailjoao = 'joao.silva@example.com'; 
    const userEmailjoana = 'joana.souza@example.com';
     
    beforeEach(() => {
        cy.visit('https://front.serverest.dev')
        cy.login('jef.t@teste.com','teste123')
        cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')

      // Visita a página de listagem de usuários
      cy.visit('https://front.serverest.dev/admin/listarusuarios');
    });
  
    it('P - Excluir o usuário com e-mail joao.silva@example.com', () => {
      // Localiza a linha correspondente ao e-mail e clica no botão de excluir
      cy.contains(userEmailjoao)
        .parents('tr') 
        .find('button')
        .contains('Excluir') 
        .click();
  
  
      // Verifica se o usuário foi excluído com sucesso
      cy.contains(userEmailjoao).should('not.exist');
    });
    it('P - Excluir o usuário com e-mail joana.souza@example.com', () => {
      
      cy.contains(userEmailjoana)
        .parents('tr') 
        .find('button')
        .contains('Excluir') 
        .click();
  
  
      // Verifica se o usuário foi excluído com sucesso
      cy.contains(userEmailjoana).should('not.exist');
    });
  });
  