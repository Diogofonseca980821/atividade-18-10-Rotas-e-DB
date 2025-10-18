const express = require ('express');
const app = express()
const { produtoRoutes } = require ("./")
const PORT = 80

app.use(express.json())

app.use('/', )