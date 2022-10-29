const clientePersistencia = require('../persistencia/cliente_persistencia')

async function inserir(pesssoa) {
    if(pesssoa && pesssoa.nome && pesssoa.documento) {
        const clienteInserido = await clientePersistencia.inserir(pesssoa);
        return clienteInserido;
    }
    else {
        throw { id: 400, mensagem: "Faltam parâmetros!"};
    }
}

async function listar() {
    const clienteInserido = await clientePersistencia.listar();
    if (clienteInserido != null) {
        return clienteInserido;
    }    
    else {
        throw { id: 500, mensagem: "Lista de clientes vazia!"};
    }
}

async function deletar(cod_cli){
    if(cod_cli){
        const clienteDeletado = await clientePersistencia.deletar(cod_cli);
        return clienteDeletado;
    }
    else{
        throw { id: 400, mensagem: "Faltam parâmetros!"};
    }
}

module.exports = {
    inserir, listar, deletar
}