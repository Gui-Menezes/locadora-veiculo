const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente')
    await cliente.end()
    return res.rows;
}

async function inserir(pesssoa){
    const cliente = new Client(conexao)
    
    await cliente.connect()

    const res = await cliente.query('INSERT INTO cliente(nome, documento) VALUES($1, $2) RETURNING *', 
    [pesssoa.nome, pesssoa.documento]);
    await cliente.end()
    return res.rows[0]
}

async function atualizar(id, pesssoa) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('UPDATE cliente SET nome = $1, documento = $2 WHERE id = $3 RETURNING *', 
    [pesssoa.nome, pesssoa.documento, id]);
    await cliente.end()
    return res.rows[0]
}

async function deletar(cod_cli) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('DELETE FROM cliente WHERE cod_cli = $1 RETURNING *', 
    [cod_cli]);
    await cliente.end()
    return res.rows[0]
}

async function buscarPorId(id) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente WHERE id = $1 RETURNING *',
    [id]);
    await cliente.end()
    return res.rows[0]
}

async function buscarPorNome(nome) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos WHERE nome LIKE %$1% RETURNING *',[nome]);
    await cliente.end();
    return res.rows;
}

module.exports = {
    listar, inserir, atualizar, deletar, buscarPorId, buscarPorNome
}