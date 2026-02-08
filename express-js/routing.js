const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home");
});
const products = [
    {
        id: 1,
        item: 'product 1'
    },
    {
        id: 2,
        item: 'product 2'
    },
    {
        id: 3,
        item: 'product 3'
    }
]
app.get('/products', (req, res) => {
    res.send(products);
})
app.get('/products/:id', (req, res) => {
    console.log(req.params.id);

    const product = products.find(p => p.id == req.params.id);
    product ? res.send(product) : res.send('page not exists');
    // if (product) {
    //     res.send(product);
    // }
})


app.listen(3000, () => {
    console.log('server started');

})