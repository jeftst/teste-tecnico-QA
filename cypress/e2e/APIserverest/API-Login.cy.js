describe('Login com Sucesso',() => {
  it('P - Retornará mensagem de sucesso e statusCod 200.', ()=>{
      cy.api({
          method:'POST',
          url:'https://serverest.dev/login',
          body:{
            "email": "fulano@qa.com",
            "password": "teste"
          }
      }).then((res)=>{
          expect(res.status).to.be.equal(200)
          expect(res.body).is.not.empty
          expect(res.body).to.have.property('message','Login realizado com sucesso')
      })
  })
})

describe('Login com Erro',() => {

  it('N - Requisitar sem dados obrigatorios, retornará mensagem de campos obrigatorios e StatusCode 400.', ()=>{
    
    cy.api({
        method:'POST',
        url:'https://serverest.dev/login',
        failOnStatusCode: false
        
    }).then((res)=>{
        expect(res.status).to.be.equal(400)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('email', 'email é obrigatório')
        expect(res.body).to.have.property('password', 'password é obrigatório')
    })
  })
  it('N - Requisitar com email invalido, retornará mensagem de email invalido e StatusCode 400.', ()=>{
    
    cy.api({
        method:'POST',
        url:'https://serverest.dev/login',
        body:{
          "email": "fulano",
          "password": "teste"
        },
        failOnStatusCode: false
      
    }).then((res)=>{
        expect(res.status).to.be.equal(400)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('email','email deve ser um email válido')
    })
  })
})