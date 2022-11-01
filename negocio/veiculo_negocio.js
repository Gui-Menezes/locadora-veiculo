const veiculoPersistence = require('../persistence/veiculo_persistence')


async function inserir(veiculo) {
    if(veiculo && veiculo.modelo && veiculo.marca && veiculo.status){
        const veiculoInserido = await veiculoPersistence.inserir(veiculo);
        return veiculoInserido;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}

async function listar() {
    const veiculolistado = await veiculoPersistence.listar();
    if(veiculolistado != null){        
        return veiculolistado;
    }
    else {
        throw { id: 204, mensagem: "Lista de Veiculos vazia!"};
    }
    
}

async function buscarPorCod_auto(cod_auto) {
    if(cod_auto){
        const veiculoBuscado = await veiculoPersistence.buscarPorCod_auto(cod_auto);
        return veiculoBuscado;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}

async function buscarPorModelo(modelo) {
    if(modelo){
        const veiculoBuscado = await veiculoPersistence.buscarPorModelo(modelo);
        return veiculoBuscado;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}

async function atualizar(cod_auto, veiculo) {
    if(cod_auto, veiculo && veiculo.modelo && veiculo.marca && veiculo.status){
        const veiculoAtualizado = await veiculoPersistence.atualizar(cod_auto, veiculo);
        return veiculoAtualizado;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}


async function deletar(cod_auto) {
    if(cod_auto){
        const veiculodeletado = await veiculoPersistence.deletar(cod_auto);
        return veiculodeletado;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}


module.exports = {
    inserir, 
    listar,
    buscarPorCod_auto,
    buscarPorModelo,
    atualizar,
    deletar

}