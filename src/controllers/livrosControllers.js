const { livroModels} = require ("../models/livroModels")

const livroControllers = {

}

listarLivros : async (req,res) => {
    try {
       const livros = await livroModels.buscarTodos () 
    } catch (error) {
        
    }
}