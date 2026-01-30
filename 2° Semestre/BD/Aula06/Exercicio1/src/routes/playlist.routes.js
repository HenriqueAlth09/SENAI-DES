const express = require("express");
const router = express.Router();

const playlistControllers = require("../controllers/playlist.controllers")

router.get("/playlists",playlistControllers.listar);
router.get("/playlist/:id",playlistControllers.buscar);
router.post("/playlist",playlistControllers.cadastrar);
router.delete("/playlist/:id",playlistControllers.apagar);
router.put("/playlist",playlistControllers.alterar);
router.patch("/playlist/:id",playlistControllers.atualizar);




module.exports = router;
    