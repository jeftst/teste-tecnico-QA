describe('Cadastro de Usuários, acesso via pagina de login.', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev');
        cy.get('[data-testid="cadastrar"]').click();
    });

    // Cenário 1: Cadastro com todos os campos válidos
    it('P - Cadastrar usuario administrador, Deve cadastrar um usuário com sucesso', () => {
        cy.get('[data-testid="nome"]').type('Maria da Silva');
        cy.get('[data-testid="email"]').type('maria.silva@example.com');
        cy.get('[data-testid="password"]').type('senha123');
        cy.get('[data-testid="checkbox"]').check(); 

        cy.get('[data-testid="cadastrar"]').click();

        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    })
})

describe('Cadastro de Usuários, acesso direto a tela de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    });

    // Cenário 2: Cadastro com todos os campos válidos
    it('P - Cadastrar usuario administrador, Deve cadastrar um usuário com sucesso', () => {
        cy.get('[data-testid="nome"]').type('João da Silva');
        cy.get('[data-testid="email"]').type('joao.silva@example.com');
        cy.get('[data-testid="password"]').type('senha123');
        cy.get('[data-testid="checkbox"]').check(); 

        cy.get('[data-testid="cadastrar"]').click();

        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });

    // Cenário 3: Tentativa de cadastro com campos obrigatórios em branco
    it('N - Validar campos Obrigatorios, Deve exibir erro ao tentar cadastrar sem preencher os campos obrigatórios', () => {
        cy.get('[data-testid="cadastrar"]').click(); // Tentando cadastrar sem preencher nada

        cy.contains('Nome é obrigatório').should('be.visible');
        cy.contains('Email é obrigatório').should('be.visible');
        cy.contains('Password é obrigatório').should('be.visible');
    });

    // Cenário 4: Cadastro com e-mail já existente
    it('N - Validar tentativa de cadastro com emaill ja cadastrado, Deve exibir erro ao tentar cadastrar com um email já cadastrado', () => {
        // Usando um email já cadastrado
        cy.get('[data-testid="nome"]').type('João da Silva');
        cy.get('[data-testid="email"]').type('joao.silva@example.com'); // Mesmo e-mail
        cy.get('[data-testid="password"]').type('senha123');
        cy.get('[data-testid="checkbox"]').check();
        cy.get('[data-testid="cadastrar"]').click();

        cy.contains('Este email já está sendo usado').should('be.visible');
    });

    // Cenário 5: Realizar cadastro de Usuário sem perfil Administrador com sucesso.
    it('P - Cadastrar usuario não administrador, Deve concluir o cadastro com sucesso.', () => {
        cy.get('[data-testid="nome"]').type('Joana de Souza');
        cy.get('[data-testid="email"]').type('joana.souza@example.com');
        cy.get('[data-testid="password"]').type('123'); 
        cy.get('[data-testid="cadastrar"]').click();

        
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
});