import { Admin } from "../models/Admin.js";
import bcrypt from "bcrypt";

// Validação de senha
function validaSenha(senha) {
  const mensa = [];

  if (senha.length < 6) {
    mensa.push("Erro... senha deve possuir, no mínimo, 6 caracteres");
  }

  let pequenas = 0;
  let grandes = 0;
  let numeros = 0;
  let simbolos = 0;

  for (const letra of senha) {
    if (/[a-z]/.test(letra)) {
      pequenas++;
    } else if (/[A-Z]/.test(letra)) {
      grandes++;
    } else if (/[0-9]/.test(letra)) {
      numeros++;
    } else {
      simbolos++;
    }
  }

  if (pequenas == 0 || grandes == 0 || numeros == 0 || simbolos == 0) {
    mensa.push(
      "Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos"
    );
  }

  return mensa;
}

// Validação de email
function validaEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Controller para listar todos os administradores
export async function adminIndex(req, res) {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao buscar administradores", detalhes: error });
  }
}

// Controller para criar um novo administrador
export async function adminCreate(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    res
      .status(400)
      .json({ erro: "Erro... Informe nome, email e senha do admin" });
    return;
  }

  // Valida o formato do email
  if (!validaEmail(email)) {
    res.status(400).json({ erro: "Erro... Email inválido" });
    return;
  }

  // Validação da senha
  const mensagem = validaSenha(senha);
  if (mensagem.length > 0) {
    res.status(400).json({ erro: mensagem.join(", ") });
    return;
  }

  // Verifica se o email já está em uso
  try {
    const adminExistente = await Admin.findOne({ where: { email } });
    if (adminExistente) {
      res.status(400).json({ erro: "Erro... Email já está em uso" });
      return;
    }
  } catch (error) {
    res.status(400).json({ erro: "Erro ao verificar email", detalhes: error });
    return;
  }

  // Criação do admin
  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(senha, salt);

    const admin = await Admin.create({
      nome,
      email,
      senha: hash,
    });

    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar admin", detalhes: error });
  }
}
