import axios from "axios";

const usuariosAPI = axios.create({ baseURL: "http://localhost:8000/usuarios" });

async function getUsuarios() {
  const response = await usuariosAPI.get("/");

  return response.data;
}

export default { getUsuarios };
