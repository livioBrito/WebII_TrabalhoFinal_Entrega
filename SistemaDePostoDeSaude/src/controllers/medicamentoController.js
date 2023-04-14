const Medicamento = require('../models/medicamento');

const create = (req, res) => {
  Medicamento.create(req.body, (err, medicamentoId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: medicamentoId });
  });
};

const findAll = (req, res) => {
  Medicamento.findAll((err, medicamentos) => {
    if (err) return res.status(500).send(err);
    res.json(medicamentos);
  });
};

const findById = (req, res) => {
  Medicamento.findById(req.params.id, (err, medicamento) => {
    if (err) return res.status(500).send(err);
    if (!medicamento) return res.status(404).send('Medicamento não encontrado');
    res.json(medicamento);
  });
};

const update = (req, res) => {
  Medicamento.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

const remove = (req, res) => {
  Medicamento.remove(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
