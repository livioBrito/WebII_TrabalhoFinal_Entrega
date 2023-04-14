const PostoSaude = require('../models/postoSaude');

const create = (req, res) => {
  PostoSaude.create(req.body, (err, postoId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: postoId });
  });
};

const findAll = (req, res) => {
  PostoSaude.findAll((err, postos) => {
    if (err) return res.status(500).send(err);
    res.json(postos);
  });
};

const findById = (req, res) => {
  PostoSaude.findById(req.params.id, (err, posto) => {
    if (err) return res.status(500).send(err);
    if (!posto) return res.status(404).send('Posto de saúde não encontrado');
    res.json(posto);
  });
};

const update = (req, res) => {
  PostoSaude.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

const remove = (req, res) => {
  PostoSaude.remove(req.params.id, (err) => {
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
