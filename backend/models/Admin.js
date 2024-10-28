import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";

export const Admin = sequelize.define(
  "admin",
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
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true, // Garante e-mail único
      validate: {
        isEmail: true, // Valida o formato do e-mail
      },
    },
    senha: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: [6, 60], // Comprimento mínimo de 8 caracteres
      },
    },
  },
  {
    timestamps: false,
  }
);

// Hook para criptografar a senha antes de criar o registro
Admin.beforeCreate((admin) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(admin.senha, salt);
  admin.senha = hash;
});

// Hook para criptografar a senha antes de atualizar, caso a senha tenha sido modificada
Admin.beforeUpdate((admin) => {
  if (admin.changed("senha")) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(admin.senha, salt);
    admin.senha = hash;
  }
});
