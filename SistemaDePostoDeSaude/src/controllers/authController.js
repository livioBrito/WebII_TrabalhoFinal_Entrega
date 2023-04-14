const jwt = require('jsonwebtoken');
const db = require('../models/db');

const SECRET_KEY = 'your-secret-key'; // Substitua por uma chave secreta segura

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM admin WHERE username = ?', [username], (err, admin) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao fazer login', error: err });
    } else if (!admin) {
      res.status(401).send({ message: 'Usuário ou senha incorretos' });
    } else {
      // Compare a senha fornecida com a senha armazenada no banco de dados (sem criptografia)
      if (password === admin.password) {
        const token = jwt.sign({ id: admin.id }, SECRET_KEY, {
          expiresIn: 86400, // 24 horas
        });

        res.status(200).send({ token });
      } else {
        res.status(401).send({ message: 'Usuário ou senha incorretos' });
      }
    }
  });
};
