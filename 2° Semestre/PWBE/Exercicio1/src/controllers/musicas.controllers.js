const musicas = require("../data/musicas.data");

const listar = (req, res) => {
    res.status(200).send(musicas).end();
};

const buscar = (req, res) => {
    const idmusica = req.params.id;

    var book = "não encontrado";

    musicas.forEach((musica, index) => {
        if (musica.id === idmusica) {
            book = musica;
        }

    });

    res.send(book).end();
}

const cadastrar = (req, res) => {
    const novomusica = req.body;
    musicas.push(novomusica);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //musica/id -> parametro
    const idmusica = req.params.id;

    var indice = -1;

    musicas.forEach((musica, index) => {
        if (musica.id === idmusica) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        musicas.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const musicaAlterado = req.body;

    var encontrei = false;

    musicas.forEach((musica, index) => {
        if (musica.id === musicaAlterado.id) {
            musicas[index] = musicaAlterado;
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
    const idmusica = req.params.id;
    const novosDados = req.body;


    var indice = -1;

    musicas.forEach((musica, index) => {
        if (musica.id === idmusica) indice = index;
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            musicas[indice][key] = novosDados[key];
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

