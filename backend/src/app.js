const express = require('express'); //importação das funcionalidades do framework: a variável contém todas as funcionalidades do express disponíveis
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate'); //validação

const app = express(); //instanciando a aplicação

app.use(cors(
    //origin: endereço do front-end
)); 
app.use(express.json()); //indicando que nossas requisições serão recebidas no formato JSON, então o express as receberá e tranformará em objeto JS (entendível)
app.use(routes);
app.use(errors());

module.exports = app;
// app.listen(3333); porta onde vamos acessar a API -> localhost:3333