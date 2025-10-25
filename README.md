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
