const {
  getTodosUsuarios,
  getUsuarioPorEmail,
  insereUsuario,
} = require("../services/usuarioService");

function getUsuarios(req, res) {
  try {
    const usuarios = getTodosUsuarios();
    res.send(usuarios);
  } catch (error) {
    res.status(500);
    res.send({ error: error.Error() });
  }
}

function getUsuario(req, res) {
  try {
    const email = req.params.email;
    if (email && email) {
      const usuario = getUsuarioPorEmail(email);
      res.send(usuario);
    } else {
      res.status(422);
      res.send("E-mail inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postUsuario(req, res) {
  try {
    const novoUsuario = req.body;
    if (req.body.nome && req.body.email && req.body.senha) {
      insereUsuario(novoUsuario);
      res.status(201);
      res.send("Usuário inserido com sucesso!");
    } else {
      res.status(422);
      res.send("Preencha todos os campos.");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

module.exports = {
  getUsuarios,
  getUsuario,
  postUsuario,
};
