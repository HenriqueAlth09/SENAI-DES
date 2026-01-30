const express = require("express");
const router = express.Router();

const produtosControllers = require("../controlers/produtos.controller");

router.get("/produto", produtosControllers.listar);
router.get("/produto/:id", produtosControllers.buscar);
router.post("/produto", produtosControllers.cadastrar);
router.delete("/produto/:id", produtosControllers.apagar);
router.put("/produto", produtosControllers.alterar);
router.patch("/produto/:id", produtosControllers.atualizar);




module.exports = router;