const express = require('express');
const validate = require('../middlewares/auth');
const router = express.Router();
const funcoesController = require('../controllers/funcoes.controller');

// INQUILINOS
router.post('/inquilinos', validate, funcoesController.CadastrarInquilino);
router.get('/inquilinos', validate, funcoesController.ListarInquilinos);
router.put('/inquilinos/:id', validate, funcoesController.AtualizarInquilino);
router.delete('/inquilinos/:id', validate, funcoesController.DeletarInquilino);

// PROPRIETÁRIOS
router.post('/proprietarios', validate, funcoesController.CadastrarProprietario);
router.get('/proprietarios', validate, funcoesController.ListarProprietarios);
router.put('/proprietarios/:id', validate, funcoesController.AtualizarProprietario);
router.delete('/proprietarios/:id', validate, funcoesController.DeletarProprietario);

// CONTRATOS
router.post('/contratos', validate, funcoesController.CadastrarContrato);
router.get('/contratos', validate, funcoesController.ListarContratos);
router.put('/contratos/:id', validate, funcoesController.AtualizarContrato);
router.delete('/contratos/:id', validate, funcoesController.DeletarContrato);

module.exports = router;
