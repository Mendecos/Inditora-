const fs = require("fs");

function getTodosUsuarios() {
  return JSON.parse(fs.readFileSync("usuarios.json"));
}

function getUsuarioPorEmail(email) {
  const data = fs.readFileSync("usuarios.json");
  const usuarios = JSON.parse(data);

  const usuarioFiltrado = usuarios.filter(
    (usuario) => usuario.email === email
  )[0];
  return usuarioFiltrado;
}

function insereUsuario(novoUsuario) {
  const data = fs.readFileSync("usuarios.json");
  const books = JSON.parse(data);
  const novoUsuarioLista = [...books, novoUsuario];
  fs.writeFileSync("usuarios.json", JSON.stringify(novoUsuarioLista));
}

module.exports = {
  getTodosUsuarios,
  getUsuarioPorEmail,
  insereUsuario,
};
