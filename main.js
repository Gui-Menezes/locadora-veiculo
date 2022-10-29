const clienteNegocio = require('./negocio/cliente_negocio')

async function main() {

    // try {
    //     const clienteInserido1 = await clienteNegocio.inserir({nome: "ClienteX", preco: 123})
    //     console.log("Cliente Inserido", clienteInserido1);
    // }catch(err) {
    //     console.log(err)
    // }
    
    // try {
    //     const clienteInserido2 = await clienteNegocio.inserir({nome: "ClienteY"})
    //     console.log("Cliente Inserido", clienteInserido2);
    // }catch(err) {
    //     console.log(err)
    // }

    try {
        const listaClientes = await clienteNegocio.listar();
        console.log("Lista de Clientes",listaClientes);
    }catch(err){
        console.log(err)
    }

    try {
        const cliente2 = await clienteNegocio.buscarPorCodCli(2);
        console.log("Cliente 2", cliente2);
    }catch(err){
        console.log(err)
    }

    // const clienteCli3 = await clienteNegocio.buscarPorNome('A');
    // console.log("Cliente nome = A", clienteCli3);

    // try {
    // const clienteAtualizado = await clienteNegocio.atualizar(2, { nome: 'NovoNome', documento: 888});
    // console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // try {
    // const clienteDeletado = await clienteNegocio.deletar(1);
    // console.log("Cliente deletado", clienteDeletado);
    // }catch(err){
    //     console.log(err)
    // }

    
    // try {
    //     const cliente2 = await clienteNegocio.buscarPorNome("N");
    //     console.log("Cliente nome = N", cliente2);
    // }catch(err){
    //     console.log(err)
    // }

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