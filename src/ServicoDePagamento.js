// Exportamos a classe para ser usada nos testes (ES Modules) [6]
export class ServicoDePagamento {
    #pagamentos; // Propriedade privada para proteger a lista [2, 5]

    constructor() {
        this.#pagamentos = []; // Inicializa a lista de pagamentos vazia [5]
    }

    pagar(codigoBarras, empresa, valor) {
        // Regra de negócio: valor > 100.00 é 'cara', caso contrário 'padrão' [4]
        const categoria = valor > 100.00 ? 'cara' : 'padrão';

        // Adiciona o pagamento como um objeto na lista [4, 5]
        this.#pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });
    }

    consultarUltimoPagamento() {
        // Retorna apenas o último item da lista usando .at(-1) [7-9]
        return this.#pagamentos.at(-1);
    }
}