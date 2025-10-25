describe('Testes de TODOs da API - DummyJSON', () => {
  it('Cenário 7.1: Validar se retorna lista de TODOs.', () => {
    cy.request('GET', 'https://dummyjson.com/todos') 
      .should((res) => {
        expect(res.status).to.eq(200);
      });
  });
});