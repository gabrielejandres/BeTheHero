const connection = require('../database/connection'); 

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //se o parâmetro de paginação não existir será 1

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5) //começa a partir desse id do registro
            .select([
                'incidents.*',
                'ongs.name', 
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf',
            ]);
    
        response.header('X-Total-Count', count['count(*)']); //campo que possibilitará o front-end saber quantos registros existem

        return response.json(incidents);
    }, 

    async create(request, response) {
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value, 
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
    
        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permited.'});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }, 
};