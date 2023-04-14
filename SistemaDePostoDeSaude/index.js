const express = require('express');
const router = express.Router();

const postoSaudeRoutes = require('./postoSaudeRoutes');
const medicamentoRoutes = require('./medicamentoRoutes');
const medicoRoutes = require('./medicoRoutes');

router.use(postoSaudeRoutes);
router.use(medicamentoRoutes);
router.use(medicoRoutes);

module.exports = router;
