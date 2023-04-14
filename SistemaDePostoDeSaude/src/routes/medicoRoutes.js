const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.post('/', medicoController.create);
router.get('/', medicoController.findAll);
router.get('/:id', medicoController.findById);
router.put('/:id', medicoController.update);
router.delete('/:id', medicoController.remove);

module.exports = router;
