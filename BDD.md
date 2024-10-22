Feature: Login de Acesso

  Scenario: Realizar acesso com sucesso
    Given que o usuário acessa a página de login
    When o usuário preenche o campo "Email" valido
    And o usuário preenche o campo "Senha" com senha valida
    And o usuário clica em "Entrar"
    Then o sistema deve concluir o acesso do usuário com sucesso

  Scenario: Realizar validação de campos em branco
    Given que o usuário acessa a página de login
    When o usuário não preenche o campo "Email"
    And o usuário não preenche o campo "Senha"
    And o usuário clica em "Entrar"
    Then o sistema deve validar retornando uma mensagem informativa

  Scenario: Realizar validação de dados incorretos
    Given que o usuário acessa a página de login
    When o usuário preenche o campo "Email" com "usuarioerrado@example.com"
    And o usuário preenche o campo "Senha" com "senhaerrada"
    And o usuário clica em "Entrar"
    Then o sistema deve validar retornando uma mensagem informativa

Feature: Cadastro de Usuário

  Scenario: Realizar cadastro de Usuário com sucesso, via navegação nas páginas
    Given que o usuário acessa a página de login
    When o usuário clica em "Cadastra-se"
    And o usuário preenche todos os campos "Nome", "Email" , "Senha" corretamente
    And o usuário marca o campo "Administrador"
    And o usuário clica em "Cadastrar"
    Then o sistema deve cadastrar o usuário com sucesso

  Scenario: Realizar cadastro de Usuário com sucesso, acesso direto à página de cadastro
    Given que o usuário acessa a página de cadastrar usuários
    When o usuário preenche todos os campos "Nome", "Email" , "Senha" corretamente
    And o usuário marca o campo "Administrador"
    And o usuário clica em "Cadastrar"
    Then o sistema deve cadastrar o usuário com sucesso

  Scenario: Validar cadastro com campos embranco
    Given que o usuário acessa a página de cadastrar usuários
    When o usuário não preenche todos os campos "Nome", "Email" , "Senha"
    And o usuário não marca o campo "Administrador"
    And o usuário clica em "Cadastrar"
    Then o sistema deve validar retornando uma mensagem informativa

  Scenario: Validar cadastro com email já cadastrado
    Given que o usuário acessa a página de cadastrar usuários
    When o usuário preenche todos os campos "Nome" e "Senha" corretamente
    And o usuário informa um email já cadastrado
    And o usuário marca o campo "Administrador"
    And o usuário clica em "Cadastrar"
    Then o sistema deve validar retornando uma mensagem informativa

  Scenario: Realizar cadastro de Usuário sem perfil Administrador com sucesso
    Given que o usuário acessa a página de cadastrar usuários
    When o usuário preenche todos os campos "Nome", "Email" e "Senha" corretamente
    And o usuário não marca o campo "Administrador"
    And o usuário clica em "Cadastrar"
    Then o sistema deve cadastrar o usuário com sucesso

Feature: Excluir Usuários

  Scenario: Excluir usuário com sucesso, navegando via página de login até página de listagem de usuários
    Given que o usuário acessa a página de login
    When o usuário efetua login
    And o usuário acessa o botão de listagem de usuários
    And o usuário acha o cadastro através do e-mail do usuário que deseja excluir
    And o usuário conclui a exclusão clicando em "Excluir"
    Then a exclusão do usuário deve ser feita com sucesso

  Scenario: Excluir usuários com sucesso, acessando diretamente a página de listagem de usuários
    Given que o usuário acessa a página de listagem de usuários
    When o usuário acha os cadastros através dos e-mails dos usuários que deseja excluir
    And o usuário conclui a exclusão clicando em "Excluir"
    Then a exclusão dos usuários deve ser feita com sucesso

Feature: Cadastro Produto

  Scenario: Cadastrar produto com os dados certos com sucesso
    Given que o usuário acessa a página de cadastro de produtos
    When o usuário preenche todos os campos para cadastro de produto corretamente
    And o usuário clica em "Cadastrar"
    Then o cadastro de novos produtos deve ser feito com sucesso

  Scenario: Validar nome em branco no cadastro de produto
    Given que o usuário acessa a página de cadastro de produtos
    When o usuário não preenche todos os campos para cadastro de produto
    And o usuário deixa o nome do produto em branco
    And o usuário clica em "Cadastrar"
    Then deve retornar uma mensagem informativa

Feature: Excluir produto

  Scenario: Excluir produto com sucesso
    Given que o usuário acessa a página de listagem de produtos
    When o usuário acha o cadastro do produto pelo nome
    And o usuário clica em "Excluir"
    Then o produto deve ser excluído com sucesso
