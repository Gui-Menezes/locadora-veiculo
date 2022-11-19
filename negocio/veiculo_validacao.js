function validarVeiculo(veiculo){
    return veiculo && veiculo.modelo && veiculo.marca && veiculo.chassi && veiculo.status &&
    typeof veiculo.modelo == 'string' &&
    typeof veiculo.marca == 'string' &&
    typeof veiculo.chassi == 'number' &&
    typeof veiculo.status == 'string'
}

module.exports = {
    validarVeiculo
}