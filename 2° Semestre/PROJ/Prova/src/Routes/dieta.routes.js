const express = require("express");
const router = express.Router();

const dietasControllers = require("../controlers/dietas.controller");

router.get("/dieta", dietasControllers.listar);
router.get("/dietas/:id", dietasControllers.buscar);






module.exports = router;