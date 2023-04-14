const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const insertAdmin = () => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM admin WHERE username = 'admin'`, (err, row) => {
      if (err) {
        reject(err);
      } else if (!row) {
        db.run(`INSERT INTO admin (username, password) VALUES ('admin', 'admin123');`, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  });
};

db.serialize(async () => {
  db.run(`CREATE TABLE postos_saude (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL
  );`);

  db.run(`CREATE TABLE medicos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    especialidade TEXT NOT NULL,
    posto_id INTEGER,
    FOREIGN KEY(posto_id) REFERENCES postos_saude(id)
  );`);

  db.run(`CREATE TABLE medicamentos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    posto_id INTEGER,
    FOREIGN KEY(posto_id) REFERENCES postos_saude(id)
  );`);

  db.run(`CREATE TABLE admin (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );`);
  try {
    await insertAdmin();
  } catch (err) {
    console.error('Erro ao inserir o administrador:', err);
  }
});

module.exports = db;
