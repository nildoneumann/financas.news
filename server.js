// Servidor simples para evitar erro de CORS e "Failed to fetch"
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
