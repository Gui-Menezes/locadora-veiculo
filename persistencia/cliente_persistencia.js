const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente')
    await cliente.end()
    return res.rows;
}

async function inserir(pessoa){
    const cliente = new Client(conexao)
    
    await cliente.connect()

    const res = await cliente.query('INSERT INTO cliente(nome, documento) VALUES($1, $2) RETURNING *', 
    [pessoa.nome, pessoa.documento]);
    await cliente.end()
    return res.rows[0]
}

async function buscarPorDocumento(documento){
    const cliente = new Client(conexao)
    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente where documento = $1', [documento])

    await cliente.end()
    return res.rows[0]
}

async function atualizar(cod_cli, pessoa) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('UPDATE cliente SET nome = $1, documento = $2 WHERE cod_cli = $3 RETURNING *', 
    [pessoa.nome, pessoa.documento, cod_cli]);
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

async function buscarPorCodCli(cod_cli) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente WHERE cod_cli = $1',
    [cod_cli]);
    await cliente.end();
    return res.rows[0];
}

async function buscarPorNome(nome) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM cliente WHERE NOME LIKE $1',['%' + nome + '%']);
    await cliente.end();
    return res.rows[0];
}

module.exports = {
    listar, inserir, buscarPorDocumento, atualizar, deletar, buscarPorCodCli, buscarPorNome
}