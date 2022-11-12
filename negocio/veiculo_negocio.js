const veiculoPersistence = require('../persistence/veiculo_persistence')
const {validarVeiculo} = require('./veiculo_validacao')

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
    const veiculoBuscado = await veiculoPersistence.buscarPorCod_auto(cod_auto);
    if(!veiculoBuscado){
        throw { id: 404, mensagem: "Veiculo Não Encontrado"};
    }
    return veiculoBuscado;
}



async function buscarPorModelo(modelo) {
    if(!modelo){
        throw {id: 400, mensagem: 'Falta Parametro Modelo'}
    }
    return await veiculoPersistence.buscarPorModelo(modelo);
}


async function atualizar(cod_auto, veiculo) {
    if(validarVeiculo(veiculo)){
        const veiculoAtualizado = await buscarPorCod_auto(cod_auto);
        if(veiculoAtualizado){
            return await veiculoPersistence.atualizar(cod_auto, veiculo);
        }
    }
    else {
            throw { id: 400, mensagem: "Parametros Inválidos!!!"};
        }
    }   


async function deletar(cod_auto) {
    const veiculoDeletar = await buscarPorCod_auto(cod_auto);
    if(veiculoDeletar)
        return await veiculoPersistence.deletar(cod_auto);
}

module.exports = {
    inserir, 
    listar,
    buscarPorCod_auto,
    buscarPorModelo,
    atualizar,
    deletar

}