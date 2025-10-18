const {sql, getConnetion } = require ('../config/db')

const livroModels = {
    buscarTodos : async() => {
        try {
            const pool = await getConnetion ()

            let querySQL = "SELECT * FROM livros"

            const result = await pool.request ().query(querySQL)

            return result.recordset;

        } catch (error) {
            console.error ('Erro ao buscar livros :' , error)

            throw error
        }
    }
}