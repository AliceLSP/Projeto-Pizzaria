const express = require('express');
const path = require('path');

const router = express.Router();  // Use Router instead of express()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'), err => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        }
    });
});

router.get('/cardapio', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'cardapio.html'), err => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        }
    });
});

router.get('/pedido', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'pedido.html'), err => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        }
    });
});

module.exports = router;
