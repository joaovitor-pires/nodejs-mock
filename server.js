const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let products= [];

app.get('/', (req, res) => {
    res.send('Server online!');
});

//Busca
app.get('/products', (req, res) => {
    res.json({ products: products }).send();
});

//Cria
app.post('/products', (req, res) => {
    const  { name } = req.body;
    products.push({id : products.length + 1, name});

    res.status(201).json().send();
});

//Atualiza completamente
app.put('/products', (req, res) => {
    const  { name, marca, tamanho, cor } = req.body;

    res.status(200).json(products).send();
});

//Atualiza apenas um
app.patch('/products', (req, res) => {


    res.status(200).json(products).send();
});

//Deleta
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id != id);

    res.status(200).json({ products }).send();
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});