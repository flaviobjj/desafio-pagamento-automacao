# Desafio: Serviço de Pagamento - Automação de Testes

Este projeto consiste na implementação de uma classe em JavaScript para gerenciar pagamentos, desenvolvida como parte da disciplina de **Programação para Automação de Testes**. O objetivo principal é aplicar conceitos de **Modularização**, **Programação Orientada a Objetos** e **Testes de Unidade** com Mocha e Node Assert.

## 📋 Requisitos do Desafio

A aplicação deve possuir uma classe com os seguintes métodos:
1. **`pagar(codigoBarras, empresa, valor)`**: Registra um novo pagamento em uma lista interna.
2. **`consultarUltimoPagamento()`**: Retorna o objeto do último pagamento realizado.

### Regra de Negócio
- Se o valor do pagamento for **maior que 100.00**, a propriedade `categoria` deve ser preenchida automaticamente como **'cara'** .
- Caso contrário, a propriedade `categoria` deve ser preenchida como **'padrão'**.

## 🚀 Tecnologias Utilizadas

- **JavaScript (ES6+)**: Linguagem principal utilizando ES Modules (`import/export`).
- **Node.js**: Ambiente de execução.
- **Mocha**: Framework de testes automatizados.
- **Assert (Node.js)**: Biblioteca para validações (assertions).

## 📂 Estrutura do Projeto

Seguindo os princípios de **Código Limpo** e organização modular:
- `src/`: Contém a lógica da aplicação (`ServicoDePagamento.js`).
- `test/`: Contém os scripts de testes de unidade (`ServicoDePagamento.test.js`).

## 🛠️ Como rodar os testes

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. No terminal, instale as dependências (Mocha):
   ```bash
   npm install

    Execute a suíte de testes:

✅ Testes Implementados
Os testes garantem o funcionamento dos seguintes cenários:

    Classificação correta para pagamentos acima de 100.00.
    Classificação correta para pagamentos iguais ou menores que 100.00.
    Garantia de que a consulta retorna apenas o registro mais recente da lista.