const express = require("express");
const router = express.Router();

const usuariosControllers = require("../controlers/usuarios.controller");

router.get("/usuario", treinosControllers.listar);
router.get("/usuarios/:id", usuariosControllers.buscar);






module.exports = router;