const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar(){
    const cliente = new Client(conexao)
    await cliente.connect()

    const res = await cliente.query(
        `SELECT locacao.cod_loc, cliente.cod_cli, cliente.nome, veiculo.cod_auto, veiculo.modelo, veiculo.chassi
        FROM locacao
        INNER JOIN cliente on (cliente.cod_cli = locacao.cod_cli)
        INNER JOIN veiculo on (veiculo.cod_auto = locacao.cod_auto)`
        )
    await cliente.end()

    return res.rows;
}

async function inserir(locacao){
    const cliente = new Client(conexao)
    await cliente.connect()


    try {
        await cliente.query('BEGIN');
        const res = await cliente.query('INSERT INTO locacao (cod_cli, cod_auto) VALUES ($1, $2) RETURNING *' ,
            [locacao.cod_cli, locacao.cod_auto]);
        await cliente.query('UPDATE veiculo SET status = $1 WHERE cod_auto = $2', 
            ["ocupado" , locacao.cod_auto]);
        await cliente.query('COMMIT');
        await cliente.end()
        return res.rows[0];
    } catch {
        await cliente.query('ROLLBACK');
    }
}

async function buscarPorCod_loc(cod_loc) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM locacao WHERE cod_loc=$1',[cod_loc]);
    await cliente.end();
    return res.rows[0];
}

async function atualizarDevolucao(cod_auto) {
    const cliente = new Client(conexao)
    await cliente.connect();

    const res = await cliente.query('UPDATE veiculo SET status = $1 WHERE cod_auto = $2 RETURNING *', 
        ['livre', cod_auto]);
    await cliente.end();
    return res.rows[0]
}

async function deletar(cod_loc) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('DELETE FROM locacao WHERE cod_loc=$1 RETURNING *',[cod_loc]);
    await cliente.end();
    return res.rows[0];
}

module.exports = {
    listar,
    inserir,
    buscarPorCod_loc,
    atualizarDevolucao,
    deletar
}