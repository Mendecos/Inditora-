import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();

import { Admin } from "../models/Admin.js";

export async function loginAdmin(req, res) {
  const { email, senha } = req.body;

  const mensaErroPadrao = "Erro... Login ou Senha Inválidos";

  // Verifica se email e senha foram fornecidos
  if (!email || !senha) {
    res.status(400).json({ erro: mensaErroPadrao });
    return;
  }

  try {
    // Busca o administrador pelo email
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      res.status(400).json({ erro: mensaErroPadrao });
      return;
    }

    // Verifica a senha utilizando bcrypt
    const senhaValida = bcrypt.compareSync(senha, admin.senha);

    if (!senhaValida) {
      res.status(400).json({ erro: mensaErroPadrao });
      return;
    }

    // Gera o token JWT
    const token = jwt.sign(
      {
        admin_logado_id: admin.id,
        admin_logado_nome: admin.nome,
      },
      process.env.JWT_KEY,
      { expiresIn: process.env.JWT_EXPIRATION || "1h" } // Configuração flexível para expiração
    );

    // Resposta de sucesso com o token
    res.status(200).json({
      token,
      id: admin.id,
      nome: admin.nome,
    });
  } catch (error) {
    console.error("Erro ao tentar fazer login: ", error);
    res.status(500).json({ erro: "Erro ao processar o login" });
  }
}
