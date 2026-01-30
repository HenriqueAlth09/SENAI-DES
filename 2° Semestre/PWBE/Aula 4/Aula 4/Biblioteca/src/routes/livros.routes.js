const express = require("express");
const router = express.Router();

const livrosControllers = require("../controllers/livros.controller")

router.get("/livros", livrosControllers.listar);
router.get("/livros/:id", livrosControllers.buscar);
router.post("/livros", livrosControllers.cadastrar);
router.delete("/livros/:id", livrosControllers.apagar);
router.put("/livros", livrosControllers.alterar);
router.patch("/livro/:id", livrosControllers.atualizar);




module.exports = router;