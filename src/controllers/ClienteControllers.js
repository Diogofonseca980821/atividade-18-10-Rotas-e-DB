const { clienteControllers } = require("..controllers/controllers");

inserirLivro : async

const clienteControllers = {
    Listarlivros: async (req , res ) => {
        try {
            const Clientes = await livroModels.buscarTodos();

            res.status (200).json(clientes);
        } catch (error) {
            console.error('erro ao listar clientes : ' , error);


        }
    },
   
    criarCliente: async (req, res) => {
        try {
            const {nomeCliente,cpfCliente} = req.body;
            if (nomeCliente == undefined || cpfCliente == undefined || isNaN(cpfCliente)) {
                return res.status(400).json({

                })
            }
            await livroModels.inserirLivro (nomeCliente , cpfCliente) 
            res.status (201).json({
                message: 'cliente cadastrado com sucesso!'
            })
        } catch (error) {
            console.error ('erro ao cadastrar cliente!: ' ,error)
            res.status (500).json({
                error : ('erro ao cadastrar cliente!' , error)
            })
        }
    }
}