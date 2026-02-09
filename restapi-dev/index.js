const express = require('express');
const app = express();
//middleware
app.use(express.json());
const products = [
    {
        "id": 1,
        "title": "product 1"
    },
    {
        "id": 2,
        "title": "product 2"
    },
    {
        "id": 3,
        "title": "product 3"
    }
]
//creating a get route
app.get('/', (req, res) => {
    res.json(products);
});
//creating a post route
app.post('/add', (req, res) => {
    const newproduct = {
        "id": products.length + 1,
        "title": `product ${products.length + 1}`
    }
    products.push(newproduct);
    res.status(200).json({
        "data": newproduct,
        "massege": "new product added"
    })
});
//creating a put route
app.put('/update/:id', (req, res) => {
    const findproduct = products.find(product => product.id == req.params.id);
    if (findproduct) {
        findproduct.title = req.body.title || findproduct.title;
        res.status(200).json({
            "data": findproduct,
            "massege": "product updated"
        });
    }
    else {
        res.status(404).json({
            "massege": "product not found"
        })
    }
});

//creating the delete route
app.delete('/delete/:id', (req, res) => {
    const findproduct = products.findIndex(product => product.id == req.params.id);
    if (findproduct !== -1) {
        products.splice(findproduct, 1);
        res.status(200).json({
            "massege": `product with id ${req.params.id} is deleted`
        })
    }
    else {
        res.status(404).json({
            "massege": 'product not found'
        })
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`server started at port ${port}`);
})
//to check the functioning of put, post, delete we have to use agents like postman 