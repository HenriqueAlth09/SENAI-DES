const express = require('express');
const router = express.Router();

const locacaoController = require("../controllers/locacao.controller");

router.get("/locacao",locacaoController.listarLocacao);
router.get("/locacao/:id",locacaoController.buscarLocacao);
router.post("/locacao",locacaoController.cadastrarLocacao);
router.delete("/locacao/:id",locacaoController.excluirLocacao);
router.put("/locacao",locacaoController.atualizarLocacao);
router.get("/locacao/cliente/:id", locacaoController.listarLocacaoPorID);
router.get("/locacao/status/:status", locacaoController.listarLocacaoPorStatus);
router.get("/faturamento", locacaoController.calcularFaturamento);
module.exports = router;