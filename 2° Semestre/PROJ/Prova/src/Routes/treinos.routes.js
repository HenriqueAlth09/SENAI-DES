const express = require("express");
const router = express.Router();

const treinosControllers = require("../controlers/treinos.controller");

router.get("/treino", treinosControllers.listar);
router.get("/treinos/:id", treinosControllers.buscar);






module.exports = router;