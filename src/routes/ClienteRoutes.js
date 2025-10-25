const express = require ('express')
router = express.router ()
const {clienteControllers } = require ('../controllers')
const {livrosRoutes} = require ('./livroRoutes')

// Get Clientes -> listar clientes
router.get ('/clientes' , clienteControllers . listarCliente)
// Post Clientes -> Criar um novo cliente 
router.post('/clientes' , clientControllers )
// ao exportar temos que dar um nome
modulo.exports = {

        livrosRoutes : router

}