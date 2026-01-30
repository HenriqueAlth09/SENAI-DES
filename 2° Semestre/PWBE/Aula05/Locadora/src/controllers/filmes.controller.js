const db = require("../data/connection");

const listarFilmes = async (req, res) => {
   const lista = await db.query("SELECT * FROM filmes");
   res.json(lista[0]).end();
};

const buscarFilmes = async (req, res) => {
   const idFilme = req.params.id;
   const Filme = await db.query("SELECT * FROM filmes WHERE id = ?", [idFilme]);
   res.json(Filme[0][0]).end();
};

const cadastrarFilmes = async (req, res) => {
   const { titulo, categoria, preco } = req.body;

   const novoFilme = await db.query("INSERT INTO filmes (titulo, categoria, preco) VALUES (?, ?, ?)", [titulo, categoria, preco]);

   const Filme = {
      id: novoFilme[0].insertId,
      titulo: titulo,
      categoria: categoria
   };
   res.json(Filme).status(201).end();
};

const excluirFilmes = async (req, res) => {
   const idFilme = req.params.id;

   try {
      const delFil = await db.query("DELETE FROM filmes WHERE id = ?", [idFilme]);

      const info = { msg: "" };

      if (delFil[0].affectedRows === 1) {
         info.msg = "Excluído com sucesso";
      } else if (delFil[0].affectedRows === 0) {
         info.msg = "Filme não encontrado";
      }

      res.status(200).json(info).end();
   } catch (error) {
      const info = {msg:""};

      if (error.errno === 1451) {
         info.msg = "Filme com locação";
      }
      res.status(500).json(info).end();

      console.log(error);
   }
};

const atualizarFilmes = async (req, res) => {
   const { id, titulo, categoria, preco } = req.body;
   try {
      const atualiza = await db.query(
         "UPDATE filmes SET titulo = ?, categoria = ?, preco = ? WHERE id = ?",
         [titulo, categoria, preco, id]
      );

      const info = {msg:""};

      if (atualiza[0].affectedRows === 0) {
         info.msg = "Nenhum filme encontrado";
      } else if (atualiza[0].affectedRows === 1) {
         info.msg = "Filme atualizado com sucesso";
      }
      res.status(200).json(info).end();
   } catch (error) {
      console.log(error);
      res.status(500).end();
   }
};

module.exports = {
   listarFilmes,
   buscarFilmes,
   cadastrarFilmes,
   excluirFilmes,
   atualizarFilmes
};