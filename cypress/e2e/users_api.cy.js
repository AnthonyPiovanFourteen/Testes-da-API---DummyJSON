describe('Testes de Usuário da API - DummyJSON', () => {
  it('Cenário 2.1: Validar se retorna lista de usuários.', () => {
    cy.request('GET', 'https://dummyjson.com/users') 
      .should((res) => {
        expect(res.status).to.eq(200);
      });
  });
  it('Cenário 2.2: Validar se retorna um usuário específico.', () => {
    cy.request('GET', 'https://dummyjson.com/users/1') 
      .should((res) => {
        expect(res.status).to.eq(200);
      });
  });
  it('Cenário 2.3: Validar se retorna um usuário inexistente.', () => {
    cy.request({
      method: 'GET',
      url: 'https://dummyjson.com/users/99999',
      failOnStatusCode: false
    }).should((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
