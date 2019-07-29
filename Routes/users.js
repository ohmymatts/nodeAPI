const express = require('express');
const router = express.Router();
const Users = require('../model/user')

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({});
        return res.send(users);
    }
    catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de usuários!' });
    }
});

router.post('/create', async (req, res) => {
    const {email, name, department} = req.body;

    if(!email || !name) return res.status(400).send({error: 'Dados Insuficientes!'})

    try{
        if (await Users.findOne({ email })) return res.status(400).send({ error: 'Usuário já cadastrado!'});

        const user = await Users.create(req.body);
        user.password = undefined;
        return res.status(201).send(user);
    }
    catch (err) {
        return res.status(500).send({ error: 'erro ao criar o usuario' });
    }
});
module.exports = router;

/*
200 - OK
201 - Created
202 - Accepted 
400 - Bad request
401 - Unauthorized -- AUTENTICAÇÃO, tem caráter temporário.
403 - Forbidden -- AUTORIZAÇÃO, tem caráter permanente.
404 - Not found.
500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível
*/

