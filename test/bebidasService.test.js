import { jest } from '@jest/globals';
import repository from '../repository/bebidasRepository.js';
import service from '../services/bebidaService.js';

// Mock do repositório

jest.mock('../repository/bebidasRepository.js')

describe('BebidaService', () => {
    it('deve criar uma bebida com sucesso', async () => {
        const mockBebida = { nome: 'Whisky', marca: 'Jack Daniels', teor_alcoolico: 0.35 };

    // simula o retorno do repository
        repository.create.mockResolvedValue({ id: 1, ...mockBebida });

        const result = await service.cadastrarBebida(mockBebida);

        expect(result).toEqual({ id: 1, ...mockBebida });
        expect(repository.create).toHaveBeenCalledTimes(1);
        expect(repository.create).toHaveBeenCalledWith(mockBebida);
    });

    it('deve lançar erro se nome estiver ausente', async () => {
        await expect(service.cadastrarBebida({marca: 'Jack'}))
            .rejects
            .toThrow('Todos os campos são obrigatório');
    });
});
