const express = require("express"); //importa um modulo
const cors = require("cors");

const treinosRoutes = require("./src/Routes/treinos.routes");
const usuariosRoutes = require("./src/Routes/usuario.routes");
const dietaRoutes = require("./src/Routes/dieta.routes");

const app = express();

app.use(express.json()); //habilita comunicação via json
app.use(cors()); //habilita requisição local

//importar as rotas configuradas
app.use(treinosRoutes);
app.use(usuariosRoutes);
app.use(dietaRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});