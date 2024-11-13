const express = require("express");
const routerUsuario = require("./routes/usuario");
const app = express();
const cors = require("cors");

const port = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/usuarios", routerUsuario);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
