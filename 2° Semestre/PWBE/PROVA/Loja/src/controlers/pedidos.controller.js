const pedidos = require("../data/pedidos.data");

//Req -> Request(requisição)
//Res -> Response(resposta)
const listar = (req, res) => {
    res.status(200).send(pedidos).end();
};

const buscar = (req, res) => {
    //   /pedidos/id
    const idpedido = req.params.id;

var user = "não encontrado";

pedidos.forEach((pedido, index) => {
    if(pedido.id === idpedido) {
        user = pedido;
    }
});

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novopedido = req.body;
    pedidos.push(novopedido);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //pedido/id -> parametro
    const idpedido = req.params.id;

    var indice = -1;

    pedidos.forEach((pedido, index)=> {
        if(pedido.id === idpedido){
            indice = index;
        }
        
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
        pedidos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const pedidoAlterado = req.body;

    var encontrei = false;

    pedidos.forEach((pedido, index) => {
        if(pedido.id === pedidoAlterado.id){
            pedidos[index] = pedidoAlterado;
            encontrei = true;
        }
    });

     if(encontrei === false) {
        res.status(404).end();
     }else {
        res.status(201).end();
     }

    };

     const atualizar = (req, res) => {
        const idpedido = req.params.id;
        const novosDados = req.body;
           

        var indice = -1;

        pedidos.forEach((pedido, index) => {
            if(pedido.id === idpedido) indice = index;
        });
        if(indice === -1){
            res.status(404).end();
        }else {
        Object.keys(novosDados).forEach((key) => {
            pedidos[indice][key] = novosDados[key];
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
