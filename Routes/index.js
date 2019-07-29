const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    let obj = req.query;
    return res.send({message: `tudo ok com o GET rota raiz`});
});

router.post('/', (req, res) => {
    return res.send({message: 'tudo ok com o POST rota raiz'});
});

module.exports = router;