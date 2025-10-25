const express = require('express');
const app = express()
const { produtoRoutes } = require("./");
const livroRoutes = require('./src/routes/livroRoutes');
const PORT = 8080
//middleware para interpretar  JSON no corpo das requisições
app.use(express.json());

// armazenamento simples em memória dos livros 

const livros = [];

// retorna todos os livros 

app.get("/livros", (req, res) => {
    try {
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: "erro ao buscar livros"});

    }
});

// rota POST para cadastrar um novo livro a partir do corpo da requisição
app.post("/livros", (req, res) => {
    try {
        const { titulo, anoPublicacao, qtdExemplares } = req.body;

        // validação basica 
        if (!titulo == undefined || anoPublicacao == undefined || qtdExemplares == undefined || isNaN(anoPublicacao)) {

            return res.status(400).json({ error: "id 'titulo' e 'anoPublicacao' são obrigatórios" });
            let livros = json.parse(data)

        }
        const novoLivro = {
            id: livros.length + 1,
            titulo,
            anoPublicacao: anoPublicacao || null,

        };
        livros.push(novoLivro);
        res.status(201).json({
            message: "livro cadastrado com sucesso",
            livro: novoLivro
        });

    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar livro" });
    }
});

app.use('/', livroRoutes) // busca todas as routes que tem livros routes
app.use('/', clienteRoutes) // busca todas as routes que tem cliente routes
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://locahost:${PORT}`)
});