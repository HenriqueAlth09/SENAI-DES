constdietas = require("..");

//Req -> Request(requisição)
//Res -> Response(resposta)
const listar = (req, res) => {
    res.status(200).send(dietas).end();
};

const buscar = (req, res) => {
    //   /dietas/id
    const iddieta = req.params.id;

var user = "não encontrado";

dietas.forEach((dieta, index) => {
    if(dieta.id === iddieta) {
        user =dieta;
    }
});

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novodieta = req.body;
   dietas.push(novodieta);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //dieta/id -> parametro
    const iddieta = req.params.id;

    var indice = -1;

   dietas.forEach((dieta, index)=> {
        if(dieta.id === iddieta){
            indice = index;
        }
        
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
       dietas.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    constdietaAlterado = req.body;

    var encontrei = false;

   dietas.forEach((dieta, index) => {
        if(dieta.id ===dietaAlterado.id){
           dietas[index] =dietaAlterado;
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
        const iddieta = req.params.id;
        const novosDados = req.body;
           

        var indice = -1;

       dietas.forEach((dieta, index) => {
            if(dieta.id === iddieta) indice = index;
        });
        if(indice === -1){
            res.status(404).end();
        }else {
        Object.keys(novosDados).forEach((key) => {
           dietas[indice][key] = novosDados[key];
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
