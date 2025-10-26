const express = require ('express')
router = express.Routerouter ()
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