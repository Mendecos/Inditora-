import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";

export const Cliente = sequelize.define(
  "cliente",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    senha: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: [8, 60],
      },
    },
  },
  {
    timestamps: true, // Ativa os timestamps
    createdAt: "criado_em", // Nome da coluna de criação
    updatedAt: "atualizado_em", // Nome da coluna de atualização
  }
);

Cliente.beforeCreate(async (cliente) => {
  const salt = bcrypt.genSaltSync(12);
  cliente.senha = bcrypt.hashSync(cliente.senha, salt);
});

Cliente.beforeUpdate(async (cliente) => {
  if (cliente.changed("senha")) {
    const salt = bcrypt.genSaltSync(12);
    cliente.senha = bcrypt.hashSync(cliente.senha, salt);
  }
});
