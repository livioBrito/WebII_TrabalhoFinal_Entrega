const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamentoController');

router.post('/', medicamentoController.create);
router.get('/', medicamentoController.findAll);
router.get('/:id', medicamentoController.findById);
router.put('/:id', medicamentoController.update);
router.delete('/:id', medicamentoController.remove);

module.exports = router;
