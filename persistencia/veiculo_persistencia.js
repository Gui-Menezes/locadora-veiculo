const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM veiculo ORDER BY cod_auto');
    await cliente.end();
    return res.rows;
}

async function inserir(veiculo) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('INSERT INTO veiculo(modelo, marca, chassi, status) VALUES ($1,$2,$3, $4) RETURNING *', 
    [veiculo.modelo, veiculo.marca, veiculo.chassi, veiculo.status]);
    await cliente.end();
    return res.rows[0];
}

async function atualizar(cod_auto,veiculo) {
    const cliente = new Client(conexao)

    await cliente.connect();
    const res = await cliente.query('UPDATE veiculo SET modelo=$1, marca=$2, chassi = $3, status=$4 WHERE cod_auto = $5 RETURNING *', 
        [veiculo.modelo, veiculo.marca, veiculo.chassi, veiculo.status, cod_auto]);
    await cliente.end();
    return res.rows[0];
}

async function buscarPorCod_auto(cod_auto) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('SELECT * FROM veiculo WHERE cod_auto = $1', [cod_auto]);
    await cliente.end();
    return res.rows[0];
}

async function buscarPorChassi(chassi) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('SELECT * FROM veiculo WHERE chassi = $1', [chassi]);
    await cliente.end();
    return res.rows[0];
}

async function buscarPorModelo(modelo) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('SELECT * FROM veiculo WHERE modelo like $1',[ '%' + modelo + '%']);
    await cliente.end();
    return res.rows[0];
}

async function deletar(cod_auto) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('DELETE FROM veiculo WHERE cod_auto = $1 RETURNING *', [cod_auto]);
    await cliente.end();
    return res.rows[0];
}

module.exports = {
    listar, 
    inserir,
    atualizar,
    buscarPorCod_auto,
    buscarPorChassi,
    buscarPorModelo,
    deletar
}