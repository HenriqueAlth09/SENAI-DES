const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const login = async(req, res) => {
    const { nome, telefone } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(telefone).digest('hex');

        const usuario = await db.query(
            "SELECT * FROM proprietarios WHERE nome = ? AND telefone = ?", [nome, telefone]);

        if(usuario[0].length === 0) return res.status(401).send({msg: 'Telefone ou nome incorreto!'});

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                telefone: usuario[0][0].telefone
            },
            process.env.SECRET_JWT, 
            { expiresIn: "120min" }
        );

        return res.status(200).json({ token });
        
    }catch(error) {
        return res.status(500).send(error);
    }
}

module.exports = { login };
