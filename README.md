# Testes de API - DummyJSON

## Nome dos Integrantes
- [ANTHONY PIOVAN - RA:1987602]
- [WENDELL PEREIRA - RA:2004501]
- [LEONARDO NAVAS - RA:2010317]

## Falhas 

### 1. **API de Produtos - Validação Insuficiente**
- **Problema**: A API aceita dados vazios na criação de produtos
- **Esperado**: Retornar erro 400 (Bad Request)
- **Obtido**: Retorna 201 e cria o produto

### 2. **API de Produtos - Falta de Validação de Tipos**
- **Problema**: A API aceita tipos de dados incorretos (ex: número no lugar de string)
- **Esperado**: Retornar erro de validação
- **Obtido**: Aceita o valor e retorna 200

### 3. **API de Produtos - Inconsistência na Estrutura**
- **Problema**: Nem todos os produtos possuem a propriedade 'brand'
- **Impacto**: Produtos da categoria "groceries" não têm marca

## Documentação dos Endpoints Testados

### 🛍️ **Products**

#### **GET /products**
- **URL**: `https://dummyjson.com/products`
- **Método**: GET
- **Descrição**: Retorna lista de todos os produtos
- **Testes**: ✅ Status 200, validação de propriedades
- **Parâmetros de Query**:
  - `limit`: Limita número de resultados
  - `skip`: Pula número de resultados
  - `select`: Seleciona campos específicos

#### **POST /products/add**
- **URL**: `https://dummyjson.com/products/add`
- **Método**: POST
- **Descrição**: Adiciona um novo produto
- **Testes**: ✅ Dados válidos e inválidos
- **Body**: JSON com dados do produto
- **Comportamento**: Aceita dados vazios (comportamento inesperado)

#### **PUT /products/{id}**
- **URL**: `https://dummyjson.com/products/1`
- **Método**: PUT
- **Descrição**: Atualiza produto existente
- **Testes**: ✅ Atualização válida e com tipos incorretos
- **Body**: JSON com campos a atualizar

#### **DELETE /products/{id}**
- **URL**: `https://dummyjson.com/products/1`
- **Método**: DELETE
- **Descrição**: Remove produto
- **Testes**: ✅ Produto existente e inexistente
- **Resposta**: Retorna produto com `isDeleted: true`

### **Users**

#### **GET /users**
- **URL**: `https://dummyjson.com/users`
- **Método**: GET
- **Descrição**: Retorna lista de usuários
- **Testes**: ✅ Status 200
- **Observação**: Validação básica apenas

#### **GET /users/{id}**
- **URL**: `https://dummyjson.com/users/1`
- **Método**: GET
- **Descrição**: Retorna usuário específico
- **Testes**: ✅ Usuário existente
- **Observação**: Sem validação de estrutura

#### **GET /users/{id} (inexistente)**
- **URL**: `https://dummyjson.com/users/99999`
- **Método**: GET
- **Descrição**: Testa busca de usuário inexistente
- **Testes**: ✅ Retorna 404 corretamente

### 📝 **Posts**

#### **GET /posts**
- **URL**: `https://dummyjson.com/posts`
- **Método**: GET
- **Descrição**: Retorna lista de posts
- **Testes**: ✅ Status 200 apenas
- **Limitação**: Cobertura muito básica

### ✅ **TODOs**

#### **GET /todos**
- **URL**: `https://dummyjson.com/todos`
- **Método**: GET
- **Descrição**: Retorna lista de TODOs
- **Testes**: ✅ Status 200 apenas
- **Limitação**: Cobertura muito básica

## A API é Confiável?

### **Resposta: PARCIALMENTE CONFIÁVEL**

**Pontos Positivos:**
-  API responde consistentemente com status codes corretos
-  Endpoints funcionam conforme esperado para operações básicas
-  Tratamento adequado de recursos inexistentes (404)
-  Performance adequada para testes

**Pontos Negativos:**
-  **Validação de dados insuficiente** - aceita dados inválidos
-  **Falta de validação de tipos** - aceita tipos incorretos
-  **Inconsistência na estrutura** - campos opcionais não documentados
-  **Comportamento permissivo demais** - deveria ser mais restritiva
