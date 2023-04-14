const Medico = require('../models/medico');

const create = (req, res) => {
  Medico.create(req.body, (err, medicoId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: medicoId });
  });
};

const findAll = (req, res) => {
  Medico.findAll((err, medicos) => {
    if (err) return res.status(500).send(err);
    res.json(medicos);
  });
};

const findById = (req, res) => {
  Medico.findById(req.params.id, (err, medico) => {
    if (err) return res.status(500).send(err);
    if (!medico) return res.status(404).send('Médico não encontrado');
    res.json(medico);
  });
};

const update = (req, res) => {
  Medico.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

const remove = (req, res) => {
  Medico.remove(req.params.id, (err) => {
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

