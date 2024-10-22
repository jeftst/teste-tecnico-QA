Funcionalidade: Login de Acesso

Cenário: Realizar acesso com sucesso.

Passos: 
Usuário acessa pagina de login.
Usuário preenche o campo Email.
Usuário preenche o campo Senha.
Usuário clica em "Entrar"

Resultados Esperados:
O sistema deve concluir o acesso do Usuário com sucesso.

Cenário: Realizar validação de campos em branco.

Passos: 
Usuário acessa página de login.
Usuário não preenche o campo Email.
Usuário não preenche o campo Senha.
Usuário clica em "Entrar"

Resultados Esperados:
O sistema deve validar retornando mensagem  informativa.


Cenário: Realizar validação de dados incorretos.

Passos: 
Usuário acessa pagina de login.
Usuário preenche com dados incorretos o campo Email.
Usuário preenche com dados incorretos o campo Senha.
Usuário clica em "Entrar"

Resultados Esperados:
O sistema deve validar retornando mensagem informativa.


Funcionalidade: Cadastro de Usuário

Cenário: Realizar cadastro de Usuário com sucesso, via navegação nas paginas.
Passos:
Usuário acessa página de login.
Usuário clica em “Cadastra-se”.
Usuário preenche todos os campos Nome, Email e Senha, de forma correta e com dados corretos.
Marca campo Administrador.
Usuário clica em Cadastrar.

Resultados Esperados:
O sistema deve cadastrar Usuário com sucesso.

Cenário: Realizar cadastro de Usuário com sucesso, acesso direto a pagina de cadastro.
Passos:
Usuário acessa pagina de cadastrarUsuários
Usuário preenche todos os campos Nome, Email e Senha, de forma correta e com dados corretos.
Marca campo Administrador.
Usuário clica em Cadastrar.

Resultados Esperados:
O sistema deve cadastrar Usuário com sucesso.

Cenário: Validar cadastro com campos em branco.
Passos:
Usuário acessa pagina de cadastrarUsuários
Usuário Não preenche todos os campos Nome, email  e Senha.
Não marca campo Administrador.
Usuário clica em Cadastrar.

Resultados Esperados:
O sistema deve validar retornando mensagem informativa.


Cenário: Validar cadastro com email ja cadastrado.
Passos:
Usuário acessa pagina de cadastrar Usuários
Usuário preenche todos os campos Nome e Senha, de forma correta e com dados corretos.
Usuário Informa email já cadastrado.
Marca campo Administrador.
Usuário clica em Cadastrar.

Resultados Esperados:
O sistema deve validar retornando mensagem informativa.


Cenário: Realizar cadastro de Usuário sem perfil Administrador com sucesso
Passos:
Usuário acessa pagina de cadastrar Usuários
Usuário preenche todos os campos Nome, Email e Senha, de forma correta e com dados corretos.
UsuárioNão marca campo Administrador.
Usuário clica em Cadastrar.

Resultados Esperados:
O sistema deve cadastrar Usuário com sucesso.

Funcionalidade: Excluir Usuários
Cenário: Excluir usuário com sucesso, navegando via pagina de login até página de listagem de usuários.
Passos: Usuário acessa pagina de login.
Usuários efetua login.
Usuário acessa botão de listagem de usuário.
Usuário acha o cadastro através do e-mail do usuário que deseja excluir.
Usuário conclui a exclusão clicando em “Excluir”

Resultados Esperados:
Exclusão do usuário feita com sucesso.


Cenário: Excluir usuários com sucesso, acessando diretamente página de listagem de usuários.
Passos: 
Usuário acessa pagina de listagem de usuários.
Usuário acha os cadastros através dos e-mail dos usuários que deseja excluir.
Usuário conclui a exclusão clicando em “Excluir”

Resultados Esperados:
Exclusão dos usuários feita com sucesso.

Funcionalidade: Cadastro Produto.
Cenário: Cadastrar produto com os dados certos com sucesso.
Passos: 
Usuário acessa pagina de cadastro de produtos.
Usuário preenche todos os campos para cadastro de produto.
Usuário clica em “Cadastrar”
Usuário conclui cadastro de produto com sucesso.

Resultados Esperados:
Cadastro de novos produtos com sucesso.

Cenário: Validar nome em branco no cadastro de produto.
Passos: 
Usuário acessa pagina de cadastro de produtos.
Usuário não preenche todos os campos para cadastro de produto.
Usuário deixa o nome do produto em branco.
Usuário clica em “Cadastrar”

Resultados Esperados:
Deve retornar mensagem informativa.

Funcionalidade: Excluir produto.

Cenário: Excluir produto com sucesso.
Passos: 
Usuário acessa pagina de listagem de produtos.
Usuário acha o cadastro do produto pelo nome.
Usuário clica em “Excluir”

Resultados Esperados:
Produto deve ser excluído com sucesso.
