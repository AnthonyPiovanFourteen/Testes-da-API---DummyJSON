describe('Testes de Posts da API - DummyJSON', () => {
  it('Cenário 6.1: Validar se retorna lista de posts.', () => {
    cy.request('GET', 'https://dummyjson.com/posts') 
      .should((res) => {
        expect(res.status).to.eq(200);
      });
  });
});