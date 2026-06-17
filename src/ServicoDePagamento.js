// Exportamos a classe para ser usada nos testes (ES Modules) 
export class ServicoDePagamento {
    #pagamentos; // Propriedade privada para proteger a lista 

    constructor() {
        this.#pagamentos = []; // Inicializa a lista de pagamentos vazia 
    }

    pagar(codigoBarras, empresa, valor) {
        // Regra de negócio: valor > 100.00 é 'cara', caso contrário 'padrão' 
        const categoria = valor > 100.00 ? 'cara' : 'padrão';

        // Adiciona o pagamento como um objeto na lista 
        this.#pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });
    }

    consultarUltimoPagamento() {
        // Retorna apenas o último item da lista usando .at(-1) 
        return this.#pagamentos.at(-1);
    }
}