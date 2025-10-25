# Testes API DummyJSON

## Integrantes da Equipe
- [ANTHONY PIOVAN - RA:1987602]
- [WENDELL PEREIRA - RA:2004501]
- [LEONARDO NAVAS - RA:2010317]

---

## Detalhamento dos Endpoints

### Products API (https://dummyjson.com/products)

#### **GET /products**
- **URL**: `https://dummyjson.com/products`
- **Método**: GET
- **Descrição**: Retorna lista de todos os produtos
- **Parâmetros Testados**:
  - `limit=5`: Limita número de resultados
  - `skip=5`: Pula número de resultados
  - `select=title,price`: Seleciona campos específicos
- **Campos Validados**: id, title, description, category, price, discountPercentage, rating, stock, tags, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, images, thumbnail, brand (opcional)
- **Status**: PASSOU (com ajustes para campo 'brand' opcional)

#### **POST /products/add**
- **URL**: `https://dummyjson.com/products/add`
- **Método**: POST
- **Descrição**: Adiciona um novo produto
- **Testes Realizados**:
  - Dados válidos completos
  - Dados inválidos/vazios (aceita incorretamente)
- **Comportamento Inesperado**: API aceita dados vazios e retorna 201

#### **PUT /products/{id}**
- **URL**: `https://dummyjson.com/products/1`
- **Método**: PUT
- **Descrição**: Atualiza produto existente
- **Testes Realizados**:
  - Atualização válida
  - Tipos de dados incorretos (aceita incorretamente)
- **Comportamento Inesperado**: API aceita tipos incorretos sem validação

#### **DELETE /products/{id}**
- **URL**: `https://dummyjson.com/products/1` e `/products/9999`
- **Método**: DELETE
- **Descrição**: Remove produto
- **Testes Realizados**:
  - Produto existente (retorna isDeleted: true)
  - Produto inexistente (retorna 404 corretamente)

---

### Users API (https://dummyjson.com/users)

#### **GET /users**
- **URL**: `https://dummyjson.com/users`
- **Método**: GET
- **Descrição**: Retorna lista de usuários
- **Status**:PASSOU (validação apenas de status 200)

#### **GET /users/{id}**
- **URL**: `https://dummyjson.com/users/1`
- **Método**: GET
- **Descrição**: Retorna usuário específico
- **Status**:PASSOU (validação apenas de status 200)

#### **GET /users/{id} (inexistente)**
- **URL**: `https://dummyjson.com/users/99999`
- **Método**: GET
- **Descrição**: Testa busca de usuário inexistente
- **Status**:PASSOU (retorna 404 corretamente)

---

### Posts API (https://dummyjson.com/posts)

#### **GET /posts**
- **URL**: `https://dummyjson.com/posts`
- **Método**: GET
- **Descrição**: Retorna lista de posts
- **Status**:PASSOU (validação apenas de status 200)

---

### TODOs API (https://dummyjson.com/todos)

#### **GET /todos**
- **URL**: `https://dummyjson.com/todos`
- **Método**: GET
- **Descrição**: Retorna lista de TODOs
- **Status**: PASSOU (validação apenas de status 200)

---

## Conclusão sobre Confiabilidade da API

### VEREDICTO: PARCIALMENTE CONFIÁVEL

#### Pontos Positivos:
- API responde consistentemente com status codes corretos
- Operações básicas de leitura funcionam adequadamente
- Tratamento correto de recursos inexistentes (404)

#### Riscos Identificados:
- **Validação permissiva** - aceita dados inválidos
- **Falta de validação de tipos** - aceita tipos incorretos
