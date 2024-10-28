import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("indietora", "root", "1235", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
