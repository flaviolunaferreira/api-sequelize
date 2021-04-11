const express = require('express')
const app = express()
const port = 3000

const ProductsController = require('./controller/ProductController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/products', ProductsController);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port port!`))
