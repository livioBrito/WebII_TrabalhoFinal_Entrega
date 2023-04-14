const db = require('./db');

const create = (medicamento, callback) => {
  db.run(
    'INSERT INTO medicamentos (nome, quantidade, posto_id) VALUES (?, ?, ?)',
    [medicamento.nome, medicamento.quantidade, medicamento.posto_id],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const findAll = (callback) => {
  db.all('SELECT * FROM medicamentos', [], (err, rows) => {
    callback(err, rows);
  });
};

const findById = (id, callback) => {
  db.get('SELECT * FROM medicamentos WHERE id = ?', [id], (err, row) => {
    callback(err, row);
  });
};

const update = (id, medicamento, callback) => {
  db.run(
    'UPDATE medicamentos SET nome = ?, quantidade = ?, posto_id = ? WHERE id = ?',
    [medicamento.nome, medicamento.quantidade, medicamento.posto_id, id],
    (err) => {
      callback(err);
    }
  );
};

const remove = (id, callback) => {
  db.run('DELETE FROM medicamentos WHERE id = ?', [id], (err) => {
    callback(err);
  });
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
