const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: "file:./script.db"
});

exports.getProdutos = async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
};

exports.createProduto = async (req, res) => {
  const produto = await prisma.produto.create({
    data: req.body
  });
  res.json(produto);
};

exports.updateProduto = async (req, res) => {
  const produto = await prisma.produto.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });
  res.json(produto);
};

exports.deleteProduto = async (req, res) => {
  await prisma.produto.delete({
    where: { id: Number(req.params.id) }
  });
  res.json({ message: "Deletado" });
};