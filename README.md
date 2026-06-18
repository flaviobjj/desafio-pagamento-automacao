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


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🤖 PIPELINE CI/CD — INTEGRAÇÃO CONTÍNUA COM GITHUB ACTIONS

Neste projeto, foi configurada uma pipeline de **Integração Contínua (CI)** utilizando o **GitHub Actions**.
O objetivo é automatizar a execução dos testes sempre que houver alterações no projeto, garantindo mais segurança, rastreabilidade e qualidade no código.

A pipeline executa os testes de forma independente na nuvem, sem depender do ambiente local do desenvolvedor.

---

## ⚡ GATILHOS DE EXECUÇÃO DA PIPELINE

A pipeline foi configurada para ser executada em diferentes situações:

### PUSH

A execução acontece automaticamente sempre que uma nova alteração é enviada para o repositório.

### WORKFLOW DISPATCH

Permite executar a pipeline manualmente pelo painel do GitHub Actions, quando for necessário rodar os testes sob demanda.

### SCHEDULE

Permite executar a pipeline de forma agendada, utilizando configuração via `cron`, para validar o projeto periodicamente.

---

## 🧠 CONCEITOS DE CI/CD APLICADOS

### INTEGRAÇÃO CONTÍNUA — CI

Foi aplicado o conceito de **Integração Contínua**, que consiste em validar o código frequentemente por meio de testes automatizados.

Essa prática ajuda a identificar falhas rapidamente após alterações no projeto, seguindo a ideia de:

**Build fast, fail fast.**

---

## 🧩 JOBS E STEPS

A automação foi organizada em um **Job**, composto por uma sequência de **Steps**.

Durante a execução da pipeline, são realizados os seguintes passos:

* Baixar o código do repositório.
* Configurar o ambiente com Node.js.
* Instalar as dependências do projeto.
* Executar a suíte de testes automatizados.
* Gerar o relatório de execução dos testes.

---

## 📄 RELATÓRIO DE TESTES — XUNIT

A pipeline gera um relatório no formato **xUnit XML**, que é um padrão utilizado para registrar o resultado da execução dos testes.

Esse relatório permite visualizar quais testes foram executados, quais passaram e quais falharam.

---

## 📦 ARTEFATOS DA PIPELINE

Após a execução dos testes, o relatório gerado, como o arquivo `report.xml`, é armazenado na pipeline como um **artefato**.

Esse artefato serve como evidência da execução dos testes e pode ser consultado posteriormente para análise ou comprovação dos resultados.

---

## ✅ OBJETIVO DA AUTOMAÇÃO

Com essa configuração, o projeto passa a contar com um fluxo automatizado de validação, garantindo que os testes sejam executados de forma padronizada a cada alteração relevante no repositório.

A pipeline contribui para:

* Reduzir falhas manuais.
* Aumentar a confiabilidade do projeto.
* Validar automaticamente os testes.
* Registrar evidências da execução.
* Melhorar a qualidade do processo de desenvolvimento.




   
