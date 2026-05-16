import assert from 'node:assert';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js';

describe('Suíte de Testes: Serviço de Pagamento', () => {

    it('Deve classificar como "cara" pagamentos acima de 100.00', () => {
        // Arrange
        const servico = new ServicoDePagamento();
        const valorCara = 156.87;

        // Act
        servico.pagar('0987-7656-3475', 'Samar', valorCara);
        const resultado = servico.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(resultado.categoria, 'cara');
        assert.strictEqual(resultado.valor, 156.87);
    });

    it('Deve classificar como "padrão" pagamentos de 100.00 ou menos', () => {
        // Arrange
        const servico = new ServicoDePagamento();
        const valorPadrao = 56.87;

        // Act
        servico.pagar('1234-5678', 'Empresa X', valorPadrao);
        const resultado = servico.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(resultado.categoria, 'padrão');
    });

    it('Deve retornar apenas o ÚLTIMO pagamento realizado', () => {
        // Arrange
        const servico = new ServicoDePagamento();
        servico.pagar('111', 'Empresa A', 50.00);
        servico.pagar('222', 'Empresa B', 200.00); // Este é o último

        // Act
        const resultado = servico.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(resultado.codigoBarras, '222');
        assert.strictEqual(resultado.empresa, 'Empresa B');
    });
});