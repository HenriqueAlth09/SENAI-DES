const express = require('express');
const router = express.Router();

const FilmesController = require("../controllers/filmes.controller");

router.get("/filme",FilmesController.listarFilmes);
router.get("/filme/:id",FilmesController.buscarFilmes);
router.post("/filme",FilmesController.cadastrarFilmes);
router.delete("/filme/:id",FilmesController.excluirFilmes);
router.put("/filme",FilmesController.atualizarFilmes);
module.exports = router;