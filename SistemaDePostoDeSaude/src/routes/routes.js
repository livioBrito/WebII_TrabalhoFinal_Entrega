const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const medicamentosController = require('../controllers/medicamentoController');
const medicosController = require('../controllers/medicoController');
const postosController = require('../controllers/postoSaudeController');
const authController = require('../controllers/authController'); // Adicione esta linha

app.use(cors());
app.use(bodyParser.json());

// Autenticação
app.post('/login', authController.login); // Adicione esta linha

// Rotas de medicamentos
app.post('/medicamentos', medicamentosController.create);
app.get('/medicamentos', medicamentosController.findAll);
app.get('/medicamentos/:id', medicamentosController.findById);
app.put('/medicamentos/:id', medicamentosController.update);
app.delete('/medicamentos/:id', medicamentosController.remove);

// Rotas de médicos
app.post('/medicos', medicosController.create);
app.get('/medicos', medicosController.findAll);
app.get('/medicos/:id', medicosController.findById);
app.put('/medicos/:id', medicosController.update);
app.delete('/medicos/:id', medicosController.remove);

// Rotas de postos de saúde
app.post('/postos_saude', postosController.create);
app.get('/postos_saude', postosController.findAll);
app.get('/postos_saude/:id', postosController.findById);
app.put('/postos_saude/:id', postosController.update);
app.delete('/postos_saude/:id', postosController.remove);

module.exports = app;
