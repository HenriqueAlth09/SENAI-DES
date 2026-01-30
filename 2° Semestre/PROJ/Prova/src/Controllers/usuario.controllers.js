constusuarios = require("..");

//Req -> Request(requisição)
//Res -> Response(resposta)
const listar = (req, res) => {
    res.status(200).send(usuarios).end();
};

const buscar = (req, res) => {
    //   /usuarios/id
    const idusuario = req.params.id;

var user = "não encontrado";

usuarios.forEach((usuario, index) => {
    if(usuario.id === idusuario) {
        user =usuario;
    }
});

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novousuario = req.body;
   usuarios.push(novousuario);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    //usuario/id -> parametro
    const idusuario = req.params.id;

    var indice = -1;

   usuarios.forEach((usuario, index)=> {
        if(usuario.id === idusuario){
            indice = index;
        }
        
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
       usuarios.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    constusuarioAlterado = req.body;

    var encontrei = false;

   usuarios.forEach((usuario, index) => {
        if(usuario.id ===usuarioAlterado.id){
           usuarios[index] =usuarioAlterado;
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
        const idusuario = req.params.id;
        const novosDados = req.body;
           

        var indice = -1;

       usuarios.forEach((usuario, index) => {
            if(usuario.id === idusuario) indice = index;
        });
        if(indice === -1){
            res.status(404).end();
        }else {
        Object.keys(novosDados).forEach((key) => {
           usuarios[indice][key] = novosDados[key];
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
