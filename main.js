const clienteNegocio = require('./negocio/cliente_negocio')

async function main() {
    // await listar();
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

    // try {
    // const clienteInserido1 = await clienteNegocio.inserir({nome: "ClienteX", documento: 123})
    // console.log("Cliente Inserido", clienteInserido1);
    // }catch(err) {
    //     console.log(err)
    // }

    try {
    const clienteInserido2 = await clienteNegocio.inserir({nome: "ClienteY"})
    console.log("Cliente Inserido", clienteInserido2);
    }catch(err) {
        console.log(err)
    }

    try {
    const listaClientes = await clienteNegocio.listar();
    console.log("Lista de Clientes",listaClientes);
    }catch(err){
        console.log(err)
    }

    // const cliente3 = await clienteNegocio.buscarPorId(3);
    // console.log("Cliente 3", cliente3);

    // const clienteCli3 = await clienteNegocio.buscarPorNome('A');
    // console.log("Cliente nome = A", clienteCli3);

    // const clienteAtualizado = await clienteNegocio.atualizar(4, { nome: 'NovoNome', preco: 888});
    // console.log("Cliente atualizado", clienteAtualizado);

    try {
    const clienteDeletado = await clienteNegocio.deletar(1);
    console.log("Cliente deletado", clienteDeletado);
    }catch(err){
        console.log(err)
    }

    try {
        const listaClientes = await clienteNegocio.listar();
        console.log("Lista de Clientes",listaClientes);
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    main
}