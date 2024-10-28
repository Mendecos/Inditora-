import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { Venda } from "./Venda.js";
import { Livro } from "./Livro.js";

export const VendaLivro = sequelize.define("venda_livro", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Define uma quantidade padrão de 1 livro por venda
  },
});

// Relacionamento com Venda e Livro
Venda.belongsToMany(Livro, { through: VendaLivro, foreignKey: "venda_id" });
Livro.belongsToMany(Venda, { through: VendaLivro, foreignKey: "livro_id" });
