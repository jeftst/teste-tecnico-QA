
describe('Teste de Exclusão de Cadastro de Produto', () => {
    beforeEach(() => {
    cy.visit('https://front.serverest.dev')
    cy.login('jef.t@teste.com','teste123')
    cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')
        
        cy.visit('https://front.serverest.dev/admin/listarprodutos');
    });
    
    it('P - Excluir um produto existente', () => {
        const produtoParaExcluir = 'Produto Teste'; 
    
        // Verifica se o produto está na lista
        cy.contains(produtoParaExcluir).should('be.visible');
    
        // Clica no botão de excluir correspondente ao produto
        cy.contains(produtoParaExcluir)
        .parents('tr') 
        .find('button')
        .contains('Excluir')
        .click();

        cy.contains(produtoParaExcluir).should('not.exist');
    });
    });
    