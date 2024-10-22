import{usuarios} from '../../fixtures/usuarios.json'


describe('Cadastro usuario.',() => {
    it('P - Cadastrar usuario com os dados corretos, Retornará mensagem de sucesso e statusCod 201.', ()=>{
        usuarios.forEach(usuario =>{
            /*cy.intercept('https://serverest.dev/usuarios').as('cadastroSucesso')*/
            cy.api({
                method:'POST',
                url:'https://serverest.dev/usuarios',
                body:{
                    "nome": usuario.name,
                    "email": usuario.email,
                    "password": usuario.password,
                    "administrador": usuario.administrador
                  }
            }).then((res)=>{
                expect(res.status).to.be.equal(201)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso')

    
            })

        })
    })
})

describe ('Consulta Usuarios',()=>{

    it('P - Consultar usuarios criados na ultima requisição, Retornará mensagem de sucesso e statusCod 200.', ()=>{
        usuarios.forEach(usuario =>{
            cy.api({
                method:'GET',
                url:'https://serverest.dev/usuarios',
                qs:{
                    "nome": usuario.name,
                    "email": usuario.email,
                    "password": usuario.password
                  }
            }).then((res)=>{
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body.usuarios[0].nome).to.equals(usuario.name)
                expect(res.body.usuarios[0].email).to.equals(usuario.email)

            })
        })
    })
    it('P - Consultar todos os usuarios criados, Retornará mensagem de sucesso e statusCod 200.', ()=>{
        cy.api({
            method:'GET',
            url:'https://serverest.dev/usuarios'

        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty

        })
    })
})
    
describe('Excluir Cadastro Usuario',()=>{

    it('P - Consultar usuarios criados na ultima requisição e exclui-los, Retornará mensagem de sucesso e statusCod 200.', ()=> {
        usuarios.forEach(usuario => {
            cy.api({
                method: 'GET',
                url: 'https://serverest.dev/usuarios',
                qs: {
                    "nome": usuario.name,
                    "email": usuario.email,
                    "password": usuario.password
                }
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body.usuarios[0].nome).to.equals(usuario.name)
                expect(res.body.usuarios[0].email).to.equals(usuario.email)
    
                const usuarioId = res.body.usuarios[0]._id;
                cy.log('ID do usuário retornado:', usuarioId); 
    
                cy.api({
                    method: 'DELETE',
                    url: `https://serverest.dev/usuarios/${usuarioId}`, 
                }).then((res) => {
                    cy.log('Resposta do DELETE:', res.body); 
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('message', 'Registro excluído com sucesso')
                });
            });
        });
    });
})       

