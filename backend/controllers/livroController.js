import { Op } from "sequelize"
import { Livro } from "../models/Livro.js"

export async function livroIndex(req, res) {
  try {
    const livros = await Livro.findAll({
      where: { destaque: true },
      order: [['id', 'desc']]
    })
    res.status(200).json(livros)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroCreate(req, res) {
  const { titulo, genero, autor, preco, foto, sinopse } = req.body

  if (!titulo || !genero || !autor || !preco || !foto || !sinopse) {
    res.status(400).json("Erro... Informe titulo, genero, autor, preco, foto, sinopse do livro")
    return
  }

  try {
    const livro = await Livro.create({
      titulo, genero, autor, preco, foto, sinopse
    })
    res.status(201).json(livro)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroUpdate(req, res) {

  const { id } = req.params

  const { titulo, genero, autor, preco, foto, sinopse } = req.body

  if (!titulo || !genero || !autor || !preco || !foto || !sinopse) {
    res.status(400).json("Erro... Informe titulo, genero, duracao, preco, foto, sinopse do livro")
    return
  }

  try {
    const livro = await Livro.update({
      titulo, genero, autor, preco, foto, sinopse
    },
      {
        where: { id }
      })
    res.status(200).json(livro)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroDelete(req, res) {

  const { id } = req.params

  try {
    await Livro.destroy({
      where: { id }
    })
    res.status(200).json({ msg: "Ok! Livro removido com sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroShow(req, res) {

  const { id } = req.params

  try {
    const livro = await Livro.findByPk(id)
    res.status(200).json(livro)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroPesquisa(req, res) {
  const { palavra } = req.params

  try {
    const livros = await Livro.findAll({
      where: { titulo: {
        [Op.like]: '%'+palavra+'%'
      }},
      order: [['id', 'desc']]
    })
    res.status(200).json(livros)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroDestaqueUpdate(req, res) {

  const { id } = req.params

  try {

    const livro = await Livro.findByPk(id)

    const destacaLivro = await Livro.update({ destaque: !livro.destaque },
      {
        where: { id }
      })
    res.status(200).json(destacaLivro)
  } catch (error) {
    res.status(400).send(error)
  }
}