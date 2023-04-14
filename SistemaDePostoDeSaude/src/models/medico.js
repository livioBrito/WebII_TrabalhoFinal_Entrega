const db = require('./db');

const create = (medico, callback) => {
  db.run(
    'INSERT INTO medicos (nome, especialidade, posto_id) VALUES (?, ?, ?)',
    [medico.nome, medico.especialidade, medico.posto_id],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const findAll = (callback) => {
  db.all('SELECT * FROM medicos', [], (err, rows) => {
    callback(err, rows);
  });
};

const findById = (id, callback) => {
  db.get('SELECT * FROM medicos WHERE id = ?', [id], (err, row) => {
    callback(err, row);
  });
};

const update = (id, medico, callback) => {
  db.run(
    'UPDATE medicos SET nome = ?, especialidade = ?, posto_id = ? WHERE id = ?',
    [medico.nome, medico.especialidade, medico.posto_id, id],
    (err) => {
      callback(err);
    }
  );
};

const remove = (id, callback) => {
  db.run('DELETE FROM medicos WHERE id = ?', [id], (err) => {
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
