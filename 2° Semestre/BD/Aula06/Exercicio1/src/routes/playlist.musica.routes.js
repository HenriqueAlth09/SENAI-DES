const express = require("express");
const router = express.Router();

const musica_playlistControllers = require("../controllers/playlist.musica.controllers")

router.get("/musica_playlist",musica_playlistControllers.listar);
router.get("/musica_playlist/:id",musica_playlistControllers.buscar);
router.post("/musica_playlist",musica_playlistControllers.cadastrar);
router.delete("/musica_playlist/:id",musica_playlistControllers.apagar);
router.put("/musica_playlist/:id",musica_playlistControllers.alterar);
router.patch("/musica_playlist/:id",musica_playlistControllers.atualizar);




module.exports = router;