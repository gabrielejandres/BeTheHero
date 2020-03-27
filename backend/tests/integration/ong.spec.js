const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback(); //zera o banco de dados
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    })

    it('should be able to create an new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@email.com",
                whatsapp: "67444512987",
                city: "Nova Friburgo",
                uf : "RJ"
            });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});