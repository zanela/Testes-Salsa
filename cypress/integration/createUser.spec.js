describe('Criação de Usuário', () => {
    it('Criar um usuário com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal('morpheus');
        expect(response.body.job).to.equal('leader');
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
      });
    });
  });
  