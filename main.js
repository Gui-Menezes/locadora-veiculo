const clienteNegocio = require('./negocio/cliente_negocio')
const locacaoNegocio = require('./negocio/locacao_negocio')

async function main() {

    // //caso de sucesso:
    // try {
    //     const clienteInserido1 = await clienteNegocio.inserir({nome: "ClienteX", documento: 123})
    //     console.log("Cliente Inserido", clienteInserido1);
    // }catch(err) {
    //     console.log(err)
    // }
    
    // //caso de insucesso: parâmetro documento vazio
    // try {
    //     const clienteInserido2 = await clienteNegocio.inserir({nome: "ClienteY"})
    //     console.log("Cliente Inserido", clienteInserido2);
    // }catch(err) {
    //     console.log(err)
    // }

    // try {
    //     const listaClientes = await clienteNegocio.listar();
    //     console.log("Lista de Clientes",listaClientes);
    // }catch(err){
    //     console.log(err)
    // }

    // try {
    //     const cliente2 = await clienteNegocio.buscarPorCodCli(2);
    //     console.log("Cliente 2", cliente2);
    // }catch(err){
    //     console.log(err)
    // }

    // try {
    //     const clienteA = await clienteNegocio.buscarPorNome('A');
    //     console.log("Cliente nome = A", clienteA);
    // }catch(err){
    //     console.log(err)
    // }

    // //caso de sucesso:
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(2, { nome: 'NovoNome', documento: 888});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // //caso de insucesso: parâmetro preco é string
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(4, { nome: 'NomeAtualizado', documento: "25a"});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // //caso de insucesso: ID inexistente:
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(100, { nome: 'NomeAtualizado', documento: 25});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }


    // // try {
    //     // const clienteDeletado = await clienteNegocio.deletar(1);
    //     // console.log("Cliente deletado", clienteDeletado);
    // // }catch(err){
    // //     console.log(err)
    // // }

    // // caso de insucesso: id inexistente
    // try {
    //     const clienteDeletado = await clienteNegocio.deletar(100);
    //     console.log("Produto deletado", clienteDeletado);
    // }catch(err){
    //     console.log(err)
    // }
    
    // // try {
    // //     const cliente2 = await clienteNegocio.buscarPorNome("N");
    // //     console.log("Cliente nome = N", cliente2);
    // // }catch(err){
    // //     console.log(err)
    // // }

    // try {
    //     const listaClientes = await clienteNegocio.listar();
    //     console.log("Lista de Clientes",listaClientes);
    // }catch(err){
    //     console.log(err)
    // }

    //LISTAR LOCAÇÃO:
    try {
        const listaLocacao = await locacaoNegocio.listar()
        console.log("Lista das locações: ", listaLocacao)
    }catch(err){
        console.log(err)
    }

    //INSERIR LOCAÇÃO:
    // const locacao1 = await locacaoPersistencia.inserir(2,1);
    // console.log("Locação incluída: ", locacao1);
}

module.exports = {
    main
}