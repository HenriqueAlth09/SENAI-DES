const express = require("express");
const router = express.Router();

const clientesControllers = require("../controlers/clientes.controller");

router.get("/cliente", clientesControllers.listar);
router.get("/clientes/:id", clientesControllers.buscar);
router.post("/cliente", clientesControllers.cadastrar);
router.delete("/cliente/:id", clientesControllers.apagar);
router.put("/cliente", clientesControllers.alterar);
router.patch("/cliente/:id", clientesControllers.atualizar);




module.exports = router;