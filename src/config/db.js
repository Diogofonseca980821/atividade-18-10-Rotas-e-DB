const { Server } = require('http');
const sql = require ('mssql');

const CONFIG = {

    user: 'sa',
    password:'123456789' ,
    Server : 'localhost' ,
    database:'BIBLIOTECA', 
    
    options: {
        encprypt : true,
        trustServerCertification: true, 
    }
}

async function getConnection() {

    try {
        const pool = await sql.connect(CONFIG)
        return pool 
    } catch (error) {

        console.error ('Erro na conexão SQL Server : ', error)

    }
    
}

module.exports = {
    sql,
    getConnection

}