const express = require('express');

/* Importação das controllers */
const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //colocando as rotas do express na variável routes

/* ROTAS DE AUTENTICAÇÃO */
routes.post('/sessions', SessionController.create);

/* ROTAS DE ONGS */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

/* ROTAS DO PERFIL DA ONG */
routes.get('/profile', ProfileController.index);

/* ROTAS DE CASOS */
routes.post('/incidents', IncidentController.create); 
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
