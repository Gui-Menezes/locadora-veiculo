const clientePersistencia = require('../persistencia/cliente_persistencia')
// FUNCIOANDO!!!
async function inserir(pesssoa) {
    if(pesssoa && pesssoa.nome && pesssoa.documento) {
        const clienteInserido = await clientePersistencia.inserir(pesssoa);
        return clienteInserido;
    }
    else {
        throw { id: 400, mensagem: "Faltam parâmetros!"};
    }
}
// FUNCIOANDO!!!
async function listar() {
    const clienteInserido = await clientePersistencia.listar();
    if (clienteInserido != null) {
        return clienteInserido;
    }    
    else {
        throw { id: 500, mensagem: "Lista de clientes vazia!" };
    }
}
// FUNCIOANDO!!! (Mas tem que verificar erro quando não existe cod_cli no BD)
async function deletar(cod_cli){
    if(cod_cli){
        const clienteDeletado = await clientePersistencia.deletar(cod_cli);
        return clienteDeletado;
    }
    else{
        throw { id: 400, mensagem: "Faltam parâmetros!" };
    }
}

// async function buscarPorCodCli(cod_cli) {
//     if(cod_cli) {
//         if(clientePersistencia.listar().cod_cli){
//             const clienteBuscado = await clientePersistencia.buscarPorCodCli(cod_cli);
//             return clienteBuscado
//         }else{
//             throw { id: 600, mensagem: "Nenhum cliente localizado!" }
//         }     
//     }else{
//         throw { id: 400, mensagem: "Faltam parâmetros!" }        
//     }
// }

// FUNCIOANDO!!! (Mas tem que verificar erro quando não existe cod_cli no BD)
async function buscarPorCodCli(cod_cli) {
    if(cod_cli) {
        const clienteBuscado = await clientePersistencia.buscarPorCodCli(cod_cli);
        return clienteBuscado
    }else{
        throw { id: 400, mensagem: "Faltam parâmetros!" }        
    }
}

// FUNCIOANDO!!! (Mas tem que verificar erro quando não existe cod_cli no BD)
async function atualizar(cod_cli, pesssoa){
    if(cod_cli && pesssoa && pesssoa.nome && pesssoa.documento){
        const clienteAtualizado = await clientePersistencia.atualizar(cod_cli, pesssoa)
        return clienteAtualizado
    }
    else {
        throw {id: 400, mensagem: "Faltam parâmetros!" };
    }
}

async function buscarPorNome(nome){
    if(nome){
        const clienteBuscadoPorNome = await clientePersistencia.buscarPorNome(nome)
        return clienteBuscadoPorNome
    }
    else{
        throw { id: 400, mensagem: "Faltam parâmetros!" }
    }
}


module.exports = {
    inserir, listar, deletar, buscarPorCodCli, atualizar, buscarPorNome
}