describe('Login com Sucesso', () => {
    it('Deve realizar o login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
      });
    });
  });
  