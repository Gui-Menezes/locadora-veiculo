function validarVeiculo(veiculo){
    return veiculo && veiculo.modelo && veiculo.marca && veiculo.status &&
    typeof veiculo.modelo == 'string' &&
    typeof veiculo.marca == 'string' &&
    typeof veiculo.status == 'string'
}

module.exports = {
    validarVeiculo
}