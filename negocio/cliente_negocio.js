const clientePersistencia = require('../persistencia/cliente_persistencia')
const locacaoNegocio = require('./locacao_negocio')
const { validarCliente } = require('./cliente_validacao')

// FUNCIOANDO!!!
async function inserir(pessoa) {
    if(pessoa && pessoa.nome && pessoa.documento) {
        const clienteBuscadoPorDocumento = await clientePersistencia.buscarPorDocumento(pessoa.documento);
        if(!clienteBuscadoPorDocumento) {
            const clienteInserido = await clientePersistencia.inserir(pessoa);
            return clienteInserido;
        }
        else{
            throw { id: 402, mensagem: "Documento já cadastrado!"}
        }
    }
    else {
        throw { id: 400, mensagem: "Faltam parâmetros!"};
    }
}

async function buscarPorDocumento(documento) {
    const clienteBuscadoPorDocumento = await clientePersistencia.buscarPorDocumento(documento)
    if(clienteBuscadoPorDocumento){
        return clienteBuscadoPorDocumento;
    }
    else{
        throw { id: 404, mensagem: `Cliente com documento ${documento} não encontrado!` };
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
        throw { id: 404, mensagem: `Cliente com cod_cli ${cod_cli} não encontrado!` };
    }else{
        return clienteBuscadoPorCodCli;     
    }
}

// FUNCIOANDO!
async function buscarPorNome(nome){
    if(nome){
        const clienteBuscadoPorNome = await clientePersistencia.buscarPorNome(nome)
        if (clienteBuscadoPorNome) {
            return clienteBuscadoPorNome
        }
        else {
            throw { id: 404, mensagem: `Cliente "${nome}" não encontrado!` }
        }
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
        else{
            throw { id: 404, mensagem: "Cliente não encontrado!" }
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
        const clienteLocacao = await locacaoNegocio.buscarClienteLocacao(cod_cli)
        if(!clienteLocacao) {
            return await clientePersistencia.deletar(cod_cli);
        }
        else {
            throw { id: 404, mensagem: `Cliente com código ${cod_cli} possui registro de locação e não pode ser excluído!`};
        }
    }
}


module.exports = {
    inserir, buscarPorDocumento, listar, deletar, buscarPorCodCli, atualizar, buscarPorNome
}