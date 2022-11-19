const veiculoPersistence = require('../persistencia/veiculo_persistencia')
const {validarVeiculo} = require('./veiculo_validacao')

async function inserir(veiculo) {
    if(veiculo && veiculo.modelo && veiculo.marca && veiculo.chassi && veiculo.status){
        const existeChassi = await veiculoPersistence.buscarPorChassi(veiculo.chassi)
        if(existeChassi){
            throw { id: 400, mensagem: `Chassi ${veiculo.chassi} já está cadastrado!`};
        }
        else{
            const veiculoInserido = await veiculoPersistence.inserir(veiculo);
            return veiculoInserido;    
        }
    }
    else {
        throw { id: 400, mensagem: "Falta(m) parâmetro(s)"};
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
    if(cod_auto) {
        const veiculoBuscado = await veiculoPersistence.buscarPorCod_auto(cod_auto);
        if(!veiculoBuscado){
            throw { id: 404, mensagem: `Veiculo de código ${cod_auto} não encontrado`};
        }
        else {
            return veiculoBuscado;
        }
    }
    else{
        throw { id: 400, mensagem: "Falta parâmetro!"};
    }
}

async function buscarPorChassi(chassi) {
    if(chassi) {
        const veiculadoChassi = await veiculoPersistence.buscarPorChassi(chassi);
        if (!veiculadoChassi) {
            throw { id: 404, mensagem: `Veículo de chassi ${chassi} não localizado!`}
        }
        else{
            return veiculadoChassi
        }
    }
    else{
        throw { id: 400, mensagem: "Parâmetro inválido!"}
    }
}


async function buscarPorModelo(modelo) {
    if(modelo){
        const veiculoBuscadoPorModelo = await veiculoPersistence.buscarPorModelo(modelo)
        if (veiculoBuscadoPorModelo) {
            return veiculoBuscadoPorModelo
        }
        else {
            throw { id: 404, mensagem: `Veículo "${modelo}" não encontrado!` }
        }
    }
    else{
        throw { id: 400, mensagem: "Falta parâmetro!" }
    }
}


async function atualizar(cod_auto, veiculo) {
    if(validarVeiculo(veiculo)){
        const veiculoAtualizado = await buscarPorCod_auto(cod_auto);
        if(veiculoAtualizado){
            return await veiculoPersistence.atualizar(cod_auto, veiculo);
        }
        else{
            throw { id: 404, mensagem: `Veículo de código ${cod_auto} não encontrado!` }
        }
    }
    else {
            throw { id: 400, mensagem: "Parametro(s) Inválido(s)!!!"};
        }
    }   


async function deletar(cod_auto) {
    const veiculoDeletar = await buscarPorCod_auto(cod_auto);
    if(veiculoDeletar) {
        return await veiculoPersistence.deletar(cod_auto);
    }
    else {
        throw { id: 404, mensagem: `Veículo de código ${cod_auto} não encontrado!` }
    }
}

module.exports = {
    inserir, 
    listar,
    buscarPorCod_auto,
    buscarPorChassi,
    buscarPorModelo,
    atualizar,
    deletar

}