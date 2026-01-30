require('dotenv').config();
const express = require('express');
const cors = require('cors');

const funcoesRoutes = require('./src/routes/funcoes.routes');
const loginRoutes = require('./src/routes/login.routes');
const relatoriosRoutes = require('./src/routes/relatorios.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(loginRoutes);
app.use(relatoriosRoutes);
app.use(funcoesRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})