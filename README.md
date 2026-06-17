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


🤖 A Pipeline de Integração Contínua (Meu TCD)
Para este trabalho, configurei um "vigia" automático usando o GitHub Actions. Isso significa que o código é testado na nuvem de forma independente e frequente.

Gatilhos de Execução (Triggers):
A pipeline é acionada de três formas:

Push: 
Toda vez que eu envio uma atualização para a branch main.

Manual (Workflow Dispatch): 
Posso rodar os testes clicando em um botão no GitHub.

Agendada (Schedule): 
Configurei para rodar sozinha em períodos definidos (via cron).



🧠 Conceitos Aplicados (O que aprendi)
Para atender aos requisitos do Trabalho de Conclusão, apliquei estes fundamentos de CI/CD:

Integração Contínua (CI): 
É a prática de juntar as alterações de código com frequência para encontrar erros o mais rápido possível (princípio Fail Fast).

Jobs e Steps: 
Organizei a pipeline em "Trabalhos" e "Passos". O robô baixa o código, prepara o ambiente Node.js, instala as dependências e executa os testes.

Relatórios (xUnit):
Configurei o Mocha para gerar um relatório profissional no formato xUnit XML. facilitando a leitura dos resultados.

Artefatos:
O relatório gerado (report.xml) é armazenado na própria pipeline como um "artefato". Assim, tenho um histórico permanente de que os testes passaram com sucesso.

