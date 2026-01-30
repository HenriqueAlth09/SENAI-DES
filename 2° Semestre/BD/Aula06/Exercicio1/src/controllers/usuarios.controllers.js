const usuario = require("../data/usuarios.data");

const listar = (req, res) => {
    res.status(200).send(usuario).end();
};

const buscar = (req, res) => {
    const idusuario = req.params.id;

    var book = "não encontrado";

    usuario.forEach((usuario, index) => {
        if (usuario.id === idusuario) {
            book = usuario;
        }

    });

    res.send(book).end();
}

const cadastrar = (req, res) => {
    const novousuario = req.body;
    usuario.push(novousuario);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //usuario/id -> parametro
    const idusuario = req.params.id;

    var indice = -1;

    usuario.forEach((usuario, index) => {
        if (usuario.id === idusuario) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        usuario.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const usuarioAlterado = req.body;

    var encontrei = false;

    usuario.forEach((usuario, index) => {
        if (usuario.id === usuarioAlterado.id) {
            usuario[index] = usuarioAlterado;
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
    const idusuario = req.params.id;
    const novosDados = req.body;


    var indice = -1;

    usuario.forEach((usuario, index) => {
        if (usuario.id === idusuario) indice = index;
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            usuario[indice][key] = novosDados[key];
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

