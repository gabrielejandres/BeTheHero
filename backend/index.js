const express = require('express'); //importação das funcionalidades do framework: a variável contém todas as funcionalidades do express disponíveis

const app = express(); //instanciando a aplicação

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluna: 'Gabriele Jandres Cavalcanti'
    });
}); //acessar a rota raiz do node

app.listen(3333); //porta onde vamos acessar a API -> localhost:3333