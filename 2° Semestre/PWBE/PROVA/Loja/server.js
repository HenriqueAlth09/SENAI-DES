const express = require("express"); //importa um modulo
const cors = require("cors");

const clientesRoutes = require("./src/routes/clientes.routes");
const produtosRoutes = require("./src/routes/produtos.routes");
const pedidosRoutes = require("./src/routes/pedidos.routes");

const app = express();

app.use(express.json()); //habilita comunicação via json
app.use(cors()); //habilita requisição local

//importar as rotas configuradas
app.use(clientesRoutes);
app.use(produtosRoutes);
app.use(pedidosRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});