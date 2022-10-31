const { Client } = require('pg')

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'locadora',
    user: 'postgres',
    password:'postgres' //mudar para postgres
}

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
async function deletar(cod_auto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('DELETE FROM veiculo WHERE cod_auto = $1 RETURNING *', [cod_auto]);
    console.log(res.rows);

    await cliente.end();

}

async function buscarPorCod_auto(cod_auto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM veiculo WHERE cod_auto = $1', [cod_auto]);
    await cliente.end();
    return res.rows[0];
    

}

async function main() {
    // const veiculoInserido = await inserir({modelo: "Celta", marca: "Chevrolet", status: "Livre"})
    // console.log("Veiculo Inserido", veiculoInserido);
    
    const listaVeiculos = await listar();
    console.log("Lista de Veiculos",listaVeiculos);

    // const veiculo2 = await buscarPorCod_auto({cod_auto:2});
    // console.log("veiculo 2:", veiculo2);

    // const VeiculoAtualizado = await atualizar(2, {modelo: "Tracker", marca: "Chevrolet", status: "Ocupado"});
    // console.log("Veiculo atualizado", VeiculoAtualizado);

    // const veiculoDeletado = await deletar(1);
    // console.log("Veiculo deletado", veiculoDeletado);

 
}

main();