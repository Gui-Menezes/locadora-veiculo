

function validarCliente(pessoa){
    return pessoa && pessoa.nome && pessoa.documento &&
        typeof pessoa.nome == 'string' && 
        typeof pessoa.documento == 'number'
}

module.exports = {
    validarCliente
}