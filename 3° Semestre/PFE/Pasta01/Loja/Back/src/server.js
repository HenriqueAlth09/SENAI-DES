const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express(); // 🔥 cria o app primeiro
const prisma = new PrismaClient(); // 🔥 conecta com o banco

app.use(cors());
app.use(express.json());

Sapp.get('/produtos', async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar produtos" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});