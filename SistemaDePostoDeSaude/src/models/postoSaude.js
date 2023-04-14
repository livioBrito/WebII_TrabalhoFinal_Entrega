const db = require('./db');

const create = (posto, callback) => {
  db.run(
    'INSERT INTO postos_saude (nome, endereco) VALUES (?, ?)',
    [posto.nome, posto.endereco],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const findAll = (callback) => {
  db.all('SELECT * FROM postos_saude', [], (err, rows) => {
    callback(err, rows);
  });
};

const findById = (id, callback) => {
  db.get('SELECT * FROM postos_saude WHERE id = ?', [id], (err, row) => {
    callback(err, row);
  });
};

const update = (id, posto, callback) => {
  db.run(
    'UPDATE postos_saude SET nome = ?, endereco = ? WHERE id = ?',
    [posto.nome, posto.endereco, id],
    (err) => {
      callback(err);
    }
  );
};

const remove = (id, callback) => {
  db.run('DELETE FROM postos_saude WHERE id = ?', [id], (err) => {
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

 
