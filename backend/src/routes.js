const express = require("express");
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11",
    aluno: "João L. P. Alves"
  });
});

module.exports = routes;
