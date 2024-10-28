import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { Cliente } from "./Cliente.js";

export const Venda = sequelize.define("venda", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Registra a data da venda
  },
  total: {
    type: DataTypes.DECIMAL(9, 2), // Armazena o valor total da venda
    allowNull: false,
  },
});

// Relacionamento com Cliente
Venda.belongsTo(Cliente, {
  foreignKey: {
    name: "cliente_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Cliente.hasMany(Venda, {
  foreignKey: "cliente_id",
});
