const db = require("../data/connection");

const listarLocacao = async (req, res) => {
   const lista = await db.query("SELECT * FROM Locacao");
   res.json(lista[0]).end();
}

const buscarLocacao = async (req, res) => {
   const idLocacao = req.params.id;
   const Locacao = await db.query("SELECT * FROM Locacao WHERE id = " + idLocacao);
   res.json(Locacao[0][0]).end();
}

const cadastrarLocacao = async (req, res) => {
   const { id_filme, id_cliente, data_locacao, status, preco } = req.body;

   const novaLocacao = await db.query("INSERT INTO Locacao VALUES (DEFAULT, ?, ?, ?, ?, ?)", [id_filme, id_cliente, data_locacao, status, preco]);


   const Locacao = {
      id: novaLocacao[0].insertId,
      id_cliente: id_cliente,
      id_filme: id_filme,
      data_locacao: data_locacao,
      status: status,
      preco: preco
   }
   res.json(Locacao).status(201).end();
}

const excluirLocacao = async (req, res) => {
   const idLocacao = req.params.id;

   try {
      const delLoc = await db.query("DELETE locacoes WHERE id = ?",
         [idLocacao]);

      const info = { msg: "" };

      if (delLoc[0].affectedRows === 1) {
         info.msg = "Excluido com sucesso";
      } else if (delLoc[0].affectedRows === 0) {
         info.msg = "Locacao não encontrado"
      }

      res.status(200).json(info).end();
   } catch (error) {
      const info = { msg: "" };

      if (error.erno === 1451) {
         info.msg = "Locacao com em andamento";
      }
      res.status(500).json(info).end();

      console.log(error);

   }
};

const atualizarLocacao = async (req, res) => {
   const { id, id_filme, id_cliente, data_locacao, status, preco } = req.body;
   try {
      const atualiza = await db.query("UPDATE locacoes SET id = ?, id_filme = ?, data_locacao = ?, status = ? where preco = ?", [id, id_filme, id_cliente, data_locacao, status, preco]);

      const info = { msg: "" };

      if (atualiza[0].affectedRows === 0) {
         info.msg = "Nenhum Locacao encontrado";
      } else if (atualiza[0].affectedRows === 1) {
         info.msg = "Locacao atualizado com sucesso";
      }
      res.status(200).json(info).end();
   } catch (error) {
      console.log(error);
      res.status(500).end();
   }
}


const listarLocacaoPorStatus = async (req, res) => {
   const { status } = req.params;
   const lista = await db.query(
      "SELECT * FROM locacoes WHERE status = ?",
      [status]
   );
   res.json(lista[0]).end();
}

const listarLocacaoPorID = async (req, res) => {
   const idCliente = req.params.id;
   const lista = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [idCliente]);
   res.json(lista[0]).end();
}

const calcularFaturamento = async (req, res) => {
   const resultado = await db.query("SELECT SUM(preco) AS faturamentoTotal FROM locacoes");
   res.json(resultado[0]).end();
};





module.exports = {
   listarLocacao,
   buscarLocacao,
   cadastrarLocacao,
   excluirLocacao,
   atualizarLocacao,
   listarLocacaoPorStatus,
   listarLocacaoPorID,
   calcularFaturamento
}

