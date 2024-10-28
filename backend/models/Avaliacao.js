import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { Cliente } from "./Cliente.js";
import { Livro } from "./Livro.js";

export const Avaliacao = sequelize.define(
  "avaliacao",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.STRING(255),
    },
    estrelas: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      validate: {
        min: 1,
        max: 5, // Avaliação de 1 a 5 estrelas
      },
    },
    data: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  },
  {
    tableName: "avaliacoes",
  }
);

// Relação Avaliação-Livro
Avaliacao.belongsTo(Livro, {
  foreignKey: {
    name: "livro_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Livro.hasMany(Avaliacao, {
  foreignKey: "livro_id",
});

// Relação Avaliação-Cliente
Avaliacao.belongsTo(Cliente, {
  foreignKey: {
    name: "cliente_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Cliente.hasMany(Avaliacao, {
  foreignKey: "cliente_id",
});
