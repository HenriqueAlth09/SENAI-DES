const produtos = require("../data/produtos.data");

const listar = (req, res) => {
    res.status(200).send(produtos).end();
};

const buscar = (req, res) => {
    const idproduto = req.params.id;

    var book = "não encontrado";

    produtos.forEach((produto, index) => {
        if (produto.id === idproduto) {
            book = produto;
        }

    });

    res.send(book).end();
}

const cadastrar = (req, res) => {
    const novoproduto = req.body;
    produtos.push(novoproduto);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //produto/id -> parametro
    const idproduto = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idproduto) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const produtoAlterado = req.body;

    var encontrei = false;

    produtos.forEach((produto, index) => {
        if (produto.id === produtoAlterado.id) {
            produtos[index] = produtoAlterado;
            encontrei = true;
        }
    });

    if (encontrei === false) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }

};

const atualizar = (req, res) => {
    const idproduto = req.params.id;
    const novosDados = req.body;


    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idproduto) indice = index;
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            produtos[indice][key] = novosDados[key];
        });

        res.status(204).end();
    }

};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};
