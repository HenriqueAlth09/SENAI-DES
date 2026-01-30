consttreinos = require("..");

//Req -> Request(requisição)
//Res -> Response(resposta)
const listar = (req, res) => {
    res.status(200).send(treinos).end();
};

const buscar = (req, res) => {
    //   /treinos/id
    const idtreino = req.params.id;

var user = "não encontrado";

treinos.forEach((treino, index) => {
    if(treino.id === idtreino) {
        user =treino;
    }
});

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novotreino = req.body;
   treinos.push(novotreino);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //treino/id -> parametro
    const idtreino = req.params.id;

    var indice = -1;

   treinos.forEach((treino, index)=> {
        if(treino.id === idtreino){
            indice = index;
        }
        
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
       treinos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    consttreinoAlterado = req.body;

    var encontrei = false;

   treinos.forEach((treino, index) => {
        if(treino.id ===treinoAlterado.id){
           treinos[index] =treinoAlterado;
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
        const idtreino = req.params.id;
        const novosDados = req.body;
           

        var indice = -1;

       treinos.forEach((treino, index) => {
            if(treino.id === idtreino) indice = index;
        });
        if(indice === -1){
            res.status(404).end();
        }else {
        Object.keys(novosDados).forEach((key) => {
           treinos[indice][key] = novosDados[key];
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
