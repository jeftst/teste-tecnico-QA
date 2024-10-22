describe('Cadastro de Produto', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev')
        cy.login('jef.t@teste.com','teste123')
        cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')
        cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');

    });
  
    it('P - Cadastrar um produto com sucesso', () => {
      // Preenchendo os campos obrigatórios
      cy.get('[data-testid="nome"]').type('Produto Teste');
      cy.get('[data-testid="preco"]').type('100');
      cy.get('[data-testid="descricao"]').type('Descrição do Produto Teste');
      cy.get('[data-testid="quantity"]').type('10');
  
      // Submetendo o formulário
      cy.get('[data-testid="cadastarProdutos"]').click();
  
      cy.get('*').contains('Produto Teste').should('be.visible');

    });
  
    it('N - validar cadastro com nome vazio, mostrará erro ao cadastrar produto sem nome', () => {
      // Deixando o nome vazio
      cy.get('[data-testid="preco"]').type('100');
      cy.get('[data-testid="descricao"]').type('Descrição do Produto Teste');
      cy.get('[data-testid="quantity"]').type('10');
  
      cy.get('[data-testid="cadastarProdutos"]').click();
  
      cy.contains('Nome é obrigatório').should('be.visible');
    });
  
  });
  