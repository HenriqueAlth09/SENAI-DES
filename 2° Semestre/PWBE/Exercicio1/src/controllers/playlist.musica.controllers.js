const playlist = require("../data/playlist.musica.data");

const listar = (req, res) => {
    res.status(200).send(playlist).end();
};

const buscar = (req, res) => {
    const idplaylistnovoplaylist_musica = req.params.id;

    var book = "não encontrado";

    playlist.forEach((playlistnovoplaylist_musica, index) => {
        if (playlistnovoplaylist_musica.id === idplaylistnovoplaylist_musica) {
            book = playlistnovoplaylist_musica;
        }

    });

    res.send(book).end();
}

const cadastrar = (req, res) => {
    const novoplaylist_musica = req.body;
    playlist.push(novoplaylist_musica);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //playlistnovoplaylist_musica/id -> parametro
    const idplaylistnovoplaylist_musica = req.params.id;

    var indice = -1;

    playlist.forEach((playlistnovoplaylist_musica, index) => {
        if (playlistnovoplaylist_musica.id === idplaylistnovoplaylist_musica) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        playlist.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistnovoplaylist_musicaAlterado = req.body;

    var encontrei = false;

    playlist.forEach((playlistnovoplaylist_musica, index) => {
        if (playlistnovoplaylist_musica.id === playlistnovoplaylist_musicaAlterado.id) {
            playlist[index] = playlistnovoplaylist_musicaAlterado;
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
    const idplaylistnovoplaylist_musica = req.params.id;
    const novosDados = req.body;


    var indice = -1;

    playlist.forEach((playlistnovoplaylist_musica, index) => {
        if (playlistnovoplaylist_musica.id === idplaylistnovoplaylist_musica) indice = index;
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            playlist[indice][key] = novosDados[key];
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

