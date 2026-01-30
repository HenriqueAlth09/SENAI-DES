const express = require('express');
const validate = require('../middlewares/auth');
const controller = require('../controllers/relatorios.controller');

const router = express.Router();

router.get('/proprietarios/imoveis', validate, controller.ListarProprietarioMoveis);
router.get('/contratos/inquilinos', validate, controller.InquilinoImovel);
router.get('/imoveis/disponiveis', validate, controller.ImoveissemInquilino);
router.get('/contratos/:id', validate, controller.BuscarContrato);

module.exports = router;
