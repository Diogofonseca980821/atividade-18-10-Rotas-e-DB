const express = require ('express')
const router = express.Router()
const { livrosControllers } = require ('../controllers/livrosControllers')

//GET /Livros -> Listar todos os livros
router.get ('/livros' , livrosControllers.listarLivros )

//POST /livros -> criar novo um livros 
router.post ('/livros' , livrosControllers.criarlivros)

// ao exportar temos que dar um nome
module.exports = {

    livroRoutes : router
}
