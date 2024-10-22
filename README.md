1. Configuração Inicial
Certifique-se de ter o Cypress instalado no seu projeto. Caso ainda não tenha, você pode instalá-lo usando:
gitbash ou pela propria IDE

npm init
npm install cypress --save-dev

(Usei a versão Cypress 13.6.4, entao para um melhor resultado pode baixar a mesma versão:
npm install cypress@13.6.4 --save-dev )

2. Para melhor visualização das requisições de APIs instalar o plugin cypress-plugin-api:
npm i cypress-plugin-api
e em seguida importa-la:
import 'cypress-plugin-api'

3. Tambem foi usado o mochawesome, para registros de analise de nossos testes:
npm install --save-dev mochawesome
(para rodar apenas o mochawesome: npx cypress run --reporter mochawesome)

4. Abra o Cypress pela primeira vez para que ele crie a estrutura de diretórios:

npx cypress open

Nesse projeto testamos o Front https://front.serverest.dev/ e os Servisos https://serverest.dev/.

O roteiro de teste pode ser encontrado dentro do repositorio como "roteiro.md", bem como no formato Gherkin no arquivo "BDD.md".

**Recomneto executar os testes com o browser Electron, devido aos serviços que estamos consumindo nesse projeto.
**Vale lembrar que todas as execuções de quaisquer testes ficam salvos os resultados para melhor documentação dos testes na pasta "results" e os videos das execuções salvors na pasta "videos".