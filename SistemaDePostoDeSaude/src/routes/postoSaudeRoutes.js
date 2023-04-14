const express = require('express');
const router = express.Router();
const postoSaudeController = require('../controllers/postoSaudeController');

router.post('/', postoSaudeController.create);
router.get('/', postoSaudeController.findAll);
router.get('/:id', postoSaudeController.findById);
router.put('/:id', postoSaudeController.update);
router.delete('/:id', postoSaudeController.remove);

module.exports = router;
