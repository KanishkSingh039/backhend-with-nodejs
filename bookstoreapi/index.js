require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const link = process.env.LINK;
const port = process.env.PORT;
const app = express();
app.use(express.json());
async function connection() {
    try {
        await mongoose.connect(link);
        console.log('connected with database succesfully');
    } catch (error) {
        console.log(error);
    }
}
connection();

const schema = new mongoose.Schema({
    bookname: String,
    pages: Number,
    author: String,
    publishyear: Number
});

const bookstoreapi = mongoose.model('bookstoreapi', schema);

async function show() {
    const booklist = await bookstoreapi.find({});
    console.log(booklist);
    return booklist;
}
async function add(req) {
    const product = await bookstoreapi.create({
        bookname: req.body.name,
        pages: req.body.pages,
        author: req.body.author,
        publishyear: req.body.publishyear
    });
    console.log(product);
    return product;

}

async function d(req) {
    const deletedelement = await bookstoreapi.findByIdAndDelete(req.params.id);
    return deletedelement;
}

async function update(req) {
    const data = await bookstoreapi.findByIdAndUpdate(req.params.id, req.body);
    console.log(data);
    return data;
}

async function singleelementbyid(req) {
    const data = await bookstoreapi.findById(req.params.id);
    console.log(data);
    return data;
}

app.get('/', async (req, res) => {
    const data = await show();
    res.json(data);
})

app.get('/:id', async (req, res) => {
    const data = await singleelementbyid(req);
    res.json(data);
})

app.post('/add', async (req, res) => {
    const data = await add(req);
    res.json(data);
})
app.delete('/delete/:id', async (req, res) => {
    const data = await d(req);
    res.json(data);
})
app.put('/update/:id', async (req, res) => {
    const data = await update(req);
    res.json(data);
})
app.listen(port, () => {
    console.log(`server started at ${port}`);
})
