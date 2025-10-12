import request from 'supertest';
import app from '../app.js';
import service from '../services/bebidaService.js';

jest.mock('../services/bebidaService.js');

const mockBebida = { nome: 'Rum', marca: 'Bacardi', idade: 5 };
describe('BebidaController', () => {
    it('POST /bebidas deve criar bebida com sucesso', async () => {
    service.cadastrarBebida.mockResolvedValue({ id: 1, ...mockBebida });

    const res = await request(app)
        .post('/bebidas')
        .set('x-api-key', process.env.API_KEY)
        .send(mockBebida);
        
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('Rum');
    });
    
    it('POST /bebidas deve falhar sem chave de segurança', async () => {
        const res = await request(app)
        .delete('/bebidas/1')
        .set('x-api-key', process.env.API_KEY)
        expect(res.status).toBe(204);
    });

    it('POST /bebidas deve falhar sem chave de segurança', async () => {
        const res = await request(app)
            .post('/bebidas')
            .send(mockBebida);

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Chave de API inválida');
    });
});
