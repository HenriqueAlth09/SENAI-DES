const db = require('../data/connection');

// INQUILINOS

const CadastrarInquilino = async (req, res) => {
    try {
        const { nome, telefone } = req.body;
        await db.query('INSERT INTO inquilinos (nome, telefone) VALUES (?, ?)', [nome, telefone]);
        res.status(201).json({ message: 'Inquilino cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarInquilinos = async (req, res) => {
    try {
        const lista = await db.query('SELECT * FROM inquilinos;');
        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarInquilino = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, telefone } = req.body;
        await db.query('UPDATE inquilinos SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
        res.status(200).json({ message: 'Inquilino atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarInquilino = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM inquilinos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Inquilino removido com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};


// PROPRIETÁRIOS 

const CadastrarProprietario = async (req, res) => {
    try {
        const { nome, telefone } = req.body;
        await db.query('INSERT INTO proprietarios (nome, telefone) VALUES (?, ?)', [nome, telefone]);
        res.status(201).json({ message: 'Proprietário cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarProprietarios = async (req, res) => {
    try {
        const lista = await db.query('SELECT * FROM proprietarios;');
        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarProprietario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, telefone } = req.body;
        await db.query('UPDATE proprietarios SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
        res.status(200).json({ message: 'Proprietário atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarProprietario = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM proprietarios WHERE id = ?', [id]);
        res.status(200).json({ message: 'Proprietário removido com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};


// CONTRATOS

const CadastrarContrato = async (req, res) => {
    try {
        const { id_inquilino, id_imovel } = req.body;
        await db.query('INSERT INTO contratos (id_inquilino, id_imovel) VALUES (?, ?)', [id_inquilino, id_imovel]);
        res.status(201).json({ message: 'Contrato cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarContratos = async (req, res) => {
    try {
        const lista = await db.query('SELECT * FROM contratos;');
        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarContrato = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_inquilino, id_imovel } = req.body;
        await db.query('UPDATE contratos SET id_inquilino = ?, id_imovel = ? WHERE id = ?', [id_inquilino, id_imovel, id]);
        res.status(200).json({ message: 'Contrato atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarContrato = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM contratos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Contrato removido com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    CadastrarInquilino,
    ListarInquilinos,
    AtualizarInquilino,
    DeletarInquilino,

    CadastrarProprietario,
    ListarProprietarios,
    AtualizarProprietario,
    DeletarProprietario,

    CadastrarContrato,
    ListarContratos,
    AtualizarContrato,
    DeletarContrato
};
