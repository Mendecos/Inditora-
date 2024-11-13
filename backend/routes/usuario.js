const { Router } = require("express");
const router = Router();
const {
  getUsuarios,
  getUsuario,
  postUsuario,
} = require("../controllers/usuarioController");

router.get("/", getUsuarios);
router.get("/:email", getUsuario);
router.post("/", postUsuario);
module.exports = router;
