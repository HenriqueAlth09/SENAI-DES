const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/produtos', controller.getProdutos);
router.post('/produtos', controller.createProduto);
router.put('/produtos/:id', controller.updateProduto);
router.delete('/produtos/:id', controller.deleteProduto);

module.exports = router;