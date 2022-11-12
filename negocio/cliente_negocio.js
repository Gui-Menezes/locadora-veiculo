const clientePersistencia = require('../persistencia/cliente_persistencia')
const { validarCliente } = require('./cliente_validacao')

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
// FUNCIOANDO!
async function listar() {
    const clientesListados = await clientePersistencia.listar();
    if (clientesListados) {
        return clientesListados;
    }    
    else {
        throw { id: 500, mensagem: "Lista de clientes vazia!" };
    }
}

// FUNCIOANDO!
async function buscarPorCodCli(cod_cli) {
    const clienteBuscadoPorCodCli = await clientePersistencia.buscarPorCodCli(cod_cli);
    if(!clienteBuscadoPorCodCli) {
        throw { id: 404, mensagem: "Cliente não encontrado!" };
    }else{
        return clienteBuscadoPorCodCli;     
    }
}

// FUNCIOANDO!
async function buscarPorNome(nome){
    if(nome){
        const clienteBuscadoPorNome = await clientePersistencia.buscarPorNome(nome)
        return clienteBuscadoPorNome
    }
    else{
        throw { id: 400, mensagem: "Faltam parâmetros!" }
    }
}

// FUNCIOANDO!
async function atualizar(cod_cli, pessoa){
    if(validarCliente(pessoa)) {
        const clienteAtualizar = await buscarPorCodCli(cod_cli)
        if(clienteAtualizar) {
            return await clientePersistencia.atualizar(cod_cli, pessoa);
        }
    }
    else {
        throw {id: 400, mensagem: "Parâmetro(s) inválido(s)!" };
    }
}

// FUNCIOANDO!
async function deletar(cod_cli){
    const clienteDeletar = await buscarPorCodCli(cod_cli)
    if(clienteDeletar){
        return await clientePersistencia.deletar(cod_cli);
    }
}


module.exports = {
    inserir, listar, deletar, buscarPorCodCli, atualizar, buscarPorNome
}