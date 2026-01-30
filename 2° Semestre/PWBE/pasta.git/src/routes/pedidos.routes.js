const express = require("express");
const router = express.Router();

const pedidosControllers = require("../controlers/pedidos.controller");

router.get("/pedido", pedidosControllers.listar);
router.get("/pedido/:id", pedidosControllers.buscar);
router.post("/pedido", pedidosControllers.cadastrar);
router.delete("/pedido/:id", pedidosControllers.apagar);
router.put("/pedido", pedidosControllers.alterar);
router.patch("/pedido/:id", pedidosControllers.atualizar);




module.exports = router;