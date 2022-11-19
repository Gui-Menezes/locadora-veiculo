const locacaoPersistencia = require('../persistencia/locacao_persistencia')
const veiculoPersistencia = require('../persistencia/veiculo_persistencia')
const clientePersistencia = require('../persistencia/cliente_persistencia')


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

// async function listar() {
//     return await locacaoPersistence.listar();
// }

async function inserir(locacao) {
    if(locacao.cod_cli && locacao.cod_auto){
        const existeCliente = await clientePersistencia.buscarPorCodCli(locacao.cod_cli)
        if(!existeCliente){
            throw { id: 404, mensagem: "Cliente não cadastrado."}
        }
        else{
            const existeVeiculo = await veiculoPersistencia.buscarPorCod_auto(locacao.cod_auto)
            if(!existeVeiculo){
                throw { id: 404, mensagem: `Veículo de código ${locacao.cod_cli} não cadastrado.`}
            }
            else{
                if(existeVeiculo['status'] == 'ocupado') {
                    throw { id: 100, mensagem: `Veículo de código ${locacao.cod_cli} está ocupado!` };
                }
                else {
                    const locacaoInserida = await locacaoPersistencia.inserir(locacao);
                    return locacaoInserida;
                }
            }
        }
    }
    else {
        throw { id: 400, mensagem: "Faltam parâmetros"};
    }
}

async function buscarPorCod_loc(cod_loc) {
    const locacao = await locacaoPersistencia.buscarPorCod_loc(cod_loc);
    if(!locacao) {
        throw { id: 404, mensagem: `Locação de código ${cod_loc} não encontrada!`};
    }
    return locacao;
}

async function atualizarDevolucao(cod_auto) {
    if (cod_auto) {
        const devolucaoAtualizar = await veiculoPersistencia.buscarPorCod_auto(cod_auto);
        if(devolucaoAtualizar) {
            return await locacaoPersistencia.atualizarDevolucao(cod_auto);
        }
        else{
            throw { id: 404, mensagem: `Veículo de código ${cod_auto} não encontrado!`}
        }
    }
    else {
        throw { id: 400, mensagem: "Parâmetro inválido!"};
    }
}

async function deletar(cod_loc) {
    const locacaoDeletar = await buscarPorCod_loc(cod_loc);
    if(locacaoDeletar)
        return await locacaoPersistencia.deletar(cod_loc);
}

module.exports = {
    listar,
    inserir,
    buscarPorCod_loc,
    atualizarDevolucao,
    deletar
}