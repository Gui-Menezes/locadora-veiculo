const locacaoPersistencia = require('../persistencia/locacao_persistencia')

// FUNCIOANDO!
async function listar() {
    const locacaoListados = await locacaoPersistencia.listar();
    if (locacaoListados != null) {
        return locacaoListados;
    }    
    else {
        throw { id: 500, mensagem: "Lista de locação vazia!" };
    }
}



module.exports = {
    listar
}