const { Client } = require('pg')

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'locadora',
    user: 'postgres', //trocar para postgres
    password: 'postgres' //trocar para postgres
}

async function listar() {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente')
        console.log(res.rows)
        await cliente.end()
}

async function inserir(pesssoa){
    const cliente = new Client(conexao)
    
    await cliente.connect()

    const res = await cliente.query('INSERT INTO cliente(nome, documento) VALUES($1, $2)', 
    [pesssoa.nome, pesssoa.documento]);
    console.log(res.rows)
    await cliente.end()
}

async function atualizar(id, pesssoa) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('UPDATE cliente SET nome = $1, documento = $2 WHERE id = $3', 
    [pesssoa.nome, pesssoa.documento, id]);
    console.log(res.rows)
    await cliente.end()
}

async function deletar(id) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('DELETE FROM cliente WHERE id = $1', 
    [id]);
    console.log(res.rows)
    await cliente.end()
}

async function buscarPorId(id) {
    const cliente = new Client(conexao)

    await cliente.connect()

    const res = await cliente.query('SELECT * FROM cliente WHERE id = $1',
    [id]);
    console.log(res.rows)
    await cliente.end()
}

async function main() {
    await listar();
    // await inserir({nome: "bermuda", preco: 17.90})
    // await listar();
    // await atualizar(1, {nome: "tênis", preco: 217.90});
    // await listar();
    // await inserir({nome: "camiseta", preco: 29.90})
    // await listar();
    // await deletar(2);
    // await inserir({nome: "camiseta", preco: 29.90})
    // await listar();
    // await buscarPorId(1);
}

main()