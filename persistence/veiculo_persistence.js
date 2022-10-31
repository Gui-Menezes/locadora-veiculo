const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM veiculo');
    await cliente.end();
    return res.rows;
}

async function inserir(veiculo) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('INSERT INTO veiculo(modelo,marca, status) VALUES ($1,$2,$3) RETURNING *', 
    [veiculo.modelo, veiculo.marca, veiculo.status]);
    await cliente.end();
    return res.rows[0];
}

async function atualizar(cod_auto,veiculo) {
    const cliente = new Client(conexao)

    await cliente.connect();
 
    const res = await cliente.query('UPDATE veiculo SET modelo=$1, marca=$2, status=$3 where cod_auto=$4 RETURNING *', 
        [veiculo.modelo, veiculo.marca, veiculo.status, cod_auto]);
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

async function buscarPorModelo(modelo) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM veiculo WHERE modelo=$1',[modelo]);
    await cliente.end();
    return res.rows;
}

async function deletar(cod_auto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('DELETE FROM veiculo WHERE cod_auto = $1 RETURNING *', [cod_auto]);
    console.log(res.rows);

    await cliente.end();

}

module.exports = {
    listar, 
    inserir, 
    buscarPorCod_auto, 
    buscarPorModelo,
    atualizar,
    deletar
}