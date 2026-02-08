const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    console.log(req.path);
    next();
}
//middleware is a function which running in the duration of request send from the client and response send from the server
//next function is use to move to next middleware and to the rout function 
//here next middle ware means the another middle ware written in the code and the routing function or a routing chain written in the code
//middleware is basically use for the authantication , logging,validation etc
const middleware2 = (req, res, next) => {
    console.log('moved to next middleware');
    next();
}
app.use(middleware, middleware2);


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
})


app.listen(3000, () => {
    console.log('server started');

})