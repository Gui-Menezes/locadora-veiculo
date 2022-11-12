const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar(){
    const cliente = new Client(conexao)
    await cliente.connect()

    const res = await cliente.query('SELECT * FROM locacao')
    await cliente.end()

    return res.rows;
}

async function inserir(cod_cli, cod_auto){
    const cliente = new Client(conexao)
    await cliente.connect()

    const res = await cliente.query('SELECT fn_inserir_locacao($1, $2)', [cod_cli, cod_auto])
    await cliente.end()
    
    return res.row[0];
}

module.exports = {
    listar, inserir
}