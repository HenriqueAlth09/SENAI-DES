const express = require("express");
const router = express.Router();

const musicaControllers = require("../controllers/musicas.controllers")

router.get("/musicas",musicaControllers.listar);
router.get("/musica/:id",musicaControllers.buscar);
router.post("/musica",musicaControllers.cadastrar);
router.delete("/musica/:id",musicaControllers.apagar);
router.put("/musica",musicaControllers.alterar);
router.patch("/musica/:id",musicaControllers.atualizar);




module.exports = router;