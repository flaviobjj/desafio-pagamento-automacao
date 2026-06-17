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




🤖 Pipeline de Integração Contínua 

Neste projeto, utilizei o GitHub Actions como servidor de automação para implementar um fluxo de Integração Contínua; 
Garantindo que os testes sejam executados de forma independente na nuvem.


⚡ Gatilhos de Execução (Triggers)
Pipeline configurada para ser acionada por diferentes eventos, garantindo um feedback constante:

    Push: Dispara automaticamente a cada nova alteração enviada para o repositório central.
    Manual (Workflow Dispatch): Permite a execução dos testes sob demanda através de um clique no painel do GitHub.
    Agendada (Schedule): Configurada para rodar de forma automática em períodos definidos (via cron), validando o projeto periodicamente.



🧠 Conceitos de CI/CD Aplicados
Requisitos do Trabalho de Conclusão;

Aplicado os seguintes fundamentos:

    Integração Contínua (CI): 
    Prática de mesclar alterações de código frequentemente para identificar e corrigir problemas o mais rápido possível (Build fast, fail fast).

    Jobs e Steps:
   A automação é dividida em um Job (trabalho) que executa sequencialmente os Steps (passos) de baixar o código, preparar o ambiente Node.js, instalar dependências e rodar os testes.

    Relatórios Padronizados (xUnit):
    Gera um relatório no formato xUnit XML, um padrão que detalha o sucesso ou falha de cada caso de teste executado.

    Artefatos: 
    O relatório gerado (report.xml) é armazenado na pipeline como um Artefato, servindo como evidência permanente de que os testes e a integração passaram com sucesso





   
