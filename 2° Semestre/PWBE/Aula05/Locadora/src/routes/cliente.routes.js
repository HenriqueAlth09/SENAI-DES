const express = require('express');
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/clientes",clientesController.listarClientes);
router.get("/clientes/:id",clientesController.buscarClientes);
router.post("/cliente",clientesController.cadastrarClientes);
router.delete("/cliente/:id",clientesController.excluirClientes);
router.put("/cliente",clientesController.atualizarClientes);
module.exports = router;