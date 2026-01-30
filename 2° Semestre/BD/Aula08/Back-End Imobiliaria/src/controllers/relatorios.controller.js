const db = require('../data/connection');

const ListarProprietarioMoveis = async (req, res) => {
    try {
        const listar = await db.query('SELECT imoveis.id, proprietarios.nome AS proprietario, imoveis.status FROM imoveis INNER JOIN proprietarios ON imoveis.id_proprietario = proprietarios.id WHERE proprietarios.nome = "Carlos Menezes";');
        res.status(200).json(listar[0]);
    } catch(error) {
        console.log(error);
    }
};

const InquilinoImovel = async (req, res) => {
    try {
        const listar = await db.query('SELECT inquilinos.nome AS inquilino, imoveis.id AS id_imovel, imoveis.status FROM contratos INNER JOIN inquilinos ON contratos.id_inquilino = inquilinos.id INNER JOIN imoveis ON contratos.id_imovel = imoveis.id;');
        res.status(200).json(listar[0]);
    } catch(error) {
        console.log(error);
    }
};

const ImoveissemInquilino = async(req, res) => {
    try {
        const listar = await db.query('SELECT * FROM imoveis WHERE status = "Disponível";');
        res.status(200).json(listar[0]);
    } catch(error) {
        console.log(error);
    }
};

const BuscarContrato = async (req, res) => {
    try {   
        const id = req.params.id;

        const listar = await db.query('SELECT * FROM contratos WHERE id = ?;', id);
        res.status(200).json(listar[0][0]);
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    ListarProprietarioMoveis,
    InquilinoImovel,
    ImoveissemInquilino,
    BuscarContrato
}
