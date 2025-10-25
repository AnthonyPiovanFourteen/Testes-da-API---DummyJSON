describe('Testes de Produtos da API - DummyJSON', () => {

  it('Cenário 1.1: Validar se retorna lista de produtos.', () => {
    cy.request('GET', 'https://dummyjson.com/products') 
      .should((res) => {
        expect(res.status).to.eq(200); 
        expect(res.body).to.have.property('products');
    });
  });

  it('Cenário 1.2: Verificar se ao usar limit=5 só retorna 5 itens.', () => {
    cy.request('GET', 'https://dummyjson.com/products?limit=5&skip=5&select=title,price') 
      .should((res) => {
        expect(res.status).to.eq(200); 
        expect(res.body).to.have.property('products');
        expect(res.body.products).to.have.length(5)
      });
    });

  it('Cenário 1.3: Garantir que cada produto possui os campos esperados (id, title, price etc.).', () => { 
    cy.request('GET', 'https://dummyjson.com/products')
      .then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('products');
        res.body.products.forEach((product) => {
          expect(product).to.have.property('id');
          expect(product).to.have.property('title');
          expect(product).to.have.property('description');
          expect(product).to.have.property('category');
          expect(product).to.have.property('price');
          expect(product).to.have.property('discountPercentage'); 
          expect(product).to.have.property('rating');
          expect(product).to.have.property('stock');
          expect(product).to.have.property('tags');
          expect(product).to.have.property('sku');
          expect(product).to.have.property('weight');
          expect(product).to.have.property('dimensions');
          expect(product).to.have.property('warrantyInformation');
          expect(product).to.have.property('shippingInformation');
          expect(product).to.have.property('availabilityStatus');
          expect(product).to.have.property('reviews');
          expect(product).to.have.property('returnPolicy');
          expect(product).to.have.property('minimumOrderQuantity');
          expect(product).to.have.property('meta');
          expect(product).to.have.property('images');
          expect(product).to.have.property('thumbnail');
          if (product.brand !== undefined) {
            expect(product.brand).to.be.a('string');
          }
        });
      });
  });
  it('Cenário 3.1: Adicionar produto com dados válidos e validar a resposta.', () => {
    cy.request({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://dummyjson.com/products/add',
      body: {
        title: 'Camisa do Baltimore Ravens',
        description: 'Camisa do Baltimore Ravens Preta, tamanho GG',
        category: 'Roupa',
        price: 299.99,
        discountPercentage: 10.5,
        rating: 5.0,
        stock: 2002,
        brand: 'Nike',
        sku: 'NKE-BTM-RAV-002"',
        weight: 0.2,
        dimensions: {
          width: 0.5,
          height: 0.7,
          depth: 0.1
        },
        warrantyInformation: '1 ano de garantia',
        shippingInformation: 'Envio em 2-3 dias úteis',
        availabilityStatus: 'Em Estoque',
        returnPolicy: 'Política de devolução de 30 dias',
        minimumOrderQuantity: 1,
        thumbnail: 'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c25a7de1-9a10-47e7-bbc3-f2595ffdbd86/MEN%27S+NIKE+LIMITED+JERSEY.png',
        images: ['https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c25a7de1-9a10-47e7-bbc3-f2595ffdbd86/MEN%27S+NIKE+LIMITED+JERSEY.png']
      }
    }).should((res) => {
      expect(res.status).to.eq(201);
    });
  });
  it('Cenário 3.2: Adicionar produto com dados inválidos e validar a resposta.', () => {
    cy.request({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://dummyjson.com/products/add',
      body: {
        title: '',
        description: '',
        category: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        brand: '',
        sku: '',
        weight: '',
        dimensions: {
          width: '',
          height: '',
          depth: ''
        },
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: '',
        returnPolicy: '',
        minimumOrderQuantity: '',
        thumbnail: '',
        images: []
      }
    }).should((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('id').that.is.a('number');
    });
  });
  it('Cenário 4.1: Atualizar um recurso existente e verificar se o retorno reflete a atualização.', () => {
    cy.request({
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://dummyjson.com/products/1',
      body: {
        title: 'TESTANDOUMDOISTESTANDO',
        price: 1.99
      }
    }).should((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id', 1);
      expect(res.body).to.have.property('title', 'TESTANDOUMDOISTESTANDO');
      expect(res.body).to.have.property('price', 1.99);
    });
  });
  it('Cenário 4.2: Testar atualização com tipo de dado inválido', () => {
    cy.request({
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://dummyjson.com/products/1',
      body: {
        title: 12345
      },
      failOnStatusCode: false 
    }).should((res) => {
      expect(res.status).to.eq(200);
    });
  });
  it('Cenário 5.1: DELETE - Validar resposta plausível ao deletar recurso', () => {
    cy.request('DELETE', 'https://dummyjson.com/products/1')
      .then((res) => { 
        expect(res.status).to.eq(200); 
        expect(res.body).to.have.property('id', 1); 
        expect(res.body).to.have.property('isDeleted', true); 
      });
  });
  it('Cenário 5.2: DELETE - Testar exclusão de um recurso inexistente', () => {
    cy.request({ 
      method: 'DELETE',
      url: 'https://dummyjson.com/products/9999',
      failOnStatusCode: false 
    }).then((res) => { 
      expect(res.status).to.eq(404); 
    });
  });
});