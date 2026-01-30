const playlists = require("../data/playlist.data");

const listar = (req, res) => {
    res.status(200).send(playlists).end();
};

const buscar = (req, res) => {
    const idplaylist = req.params.id;

    var book = "não encontrado";

    playlists.forEach((playlist, index) => {
        if (playlist.id === idplaylist) {
            book = playlist;
        }

    });

    res.send(book).end();
}

const cadastrar = (req, res) => {
    const novoplaylist = req.body;
    playlists.push(novoplaylist);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //playlist/id -> parametro
    const idplaylist = req.params.id;

    var indice = -1;

    playlists.forEach((playlist, index) => {
        if (playlist.id === idplaylist) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        playlists.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistAlterado = req.body;

    var encontrei = false;

    playlists.forEach((playlist, index) => {
        if (playlist.id === playlistAlterado.id) {
            playlists[index] = playlistAlterado;
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
    const idplaylist = req.params.id;
    const novosDados = req.body;


    var indice = -1;

    playlists.forEach((playlist, index) => {
        if (playlist.id === idplaylist) indice = index;
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            playlists[indice][key] = novosDados[key];
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

