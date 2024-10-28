import express from "express";
import cors from "cors";
import { sequelize } from "./database/conecta.js";
import { Livro } from "./models/Livro.js";
import { Cliente } from "./models/Cliente.js";
import { Avaliacao } from "./models/Avaliacao.js";
import { Admin } from "./models/Admin.js";
import routes from "./routes.js";
import { Venda } from "./models/Venda.js";
import { VendaLivro } from "./models/VendaLivro.js";

const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Sistema de Controle de Livros");
});

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com Banco de Dados realizada com Sucesso");

    await Admin.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Admins: Ok");

    await Livro.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Livros: Ok");

    await Cliente.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Clientes: Ok");

    await Avaliacao.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Avaliações: Ok");

    await Venda.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Vendas: Ok");

    await VendaLivro.sync(); // cria a tabela no banco (se não existir)
    console.log("Tabela de Venda de Livros: Ok");
  } catch (error) {
    console.error("Erro ao conectar o banco de dados:", error);
  }
}

conecta_db();

app.listen(port, () => {
  console.log(`API de Livros Rodando na Porta: ${port}`);
});
