const clienteNegocio = require('./negocio/cliente_negocio')
const locacaoNegocio = require('./negocio/locacao_negocio')
const veiculoNegocio = require('./negocio/veiculo_negocio')

async function main() {

    // ---------------- TESTES CLIENTES ------------------------
    // SUCESSO: INSERIR CLIENTE NOVO:
    try {
        const clienteInserido1 = await clienteNegocio.inserir({nome: "cliente1", documento: 123})
        console.log("Cliente1 Inserido", clienteInserido1);
    }catch(err) {
        console.log(err)
    }

    // SUCESSO: INSERIR CLIENTE NOVO:
    try {
        const clienteInserido2 = await clienteNegocio.inserir({nome: "cliente2", documento: 456})
        console.log("Cliente2 Inserido", clienteInserido2);
    }catch(err) {
        console.log(err)
    }
    
    //INSUCESSO: INSERIR CLIENTE COM DOCUMENTO JÁ EXISTENTE NO BD:
    try {
        const clienteInserido1 = await clienteNegocio.inserir({nome: "clienteX", documento: 123})
        console.log("Cliente Inserido", clienteInserido1);
    }catch(err) {
        console.log(err)
    }
    
    //INSUCESSO: PARÂMETRO DOCUMENTO VAZIO:
    try {
        const clienteInserido2 = await clienteNegocio.inserir({nome: "clienteY"})
        console.log("Cliente Inserido", clienteInserido2);
    }catch(err) {
        console.log(err)
    }

    //INSUCESSO: PARÂMETRO NOME VAZIO:
    try {
        const clienteInserido2 = await clienteNegocio.inserir({documento: 456})
        console.log("Cliente Inserido", clienteInserido2);
    }catch(err) {
        console.log(err)
    }

    // SUCESSO: LISTAR CLIENTES:
    try {
        const listaClientes = await clienteNegocio.listar();
        console.log("Lista de Clientes",listaClientes);
    }catch(err){
        console.log(err)
    }

    // SUCESSO: BUSCAR COD_CLI 2:
    try {
        const cliente1 = await clienteNegocio.buscarPorCodCli(1);
        console.log("Cliente cod_cli = 1", cliente1);
    }catch(err){
        console.log(err)
    }

    // INSUCESSO: BUSCAR COD_CLI 100:
    try {
        const cliente100 = await clienteNegocio.buscarPorCodCli(100);
        console.log("Cliente cod_cli = 100", cliente100);
    }catch(err){
        console.log(err)
    }

    //SUCESSO: BUSCAR NOME QUE POSSUI LETRA 'e':
    try {
        const clienteE = await clienteNegocio.buscarPorNome('e');
        console.log("Buscar cliente nome com letra = e", clienteE);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: BUSCAR NOME QUE POSSUI LETRA INEXISTENTE:
    try {
        const clienteW = await clienteNegocio.buscarPorNome('w');
        console.log("Buscar cliente nome com letra = w", clienteW);
    }catch(err){
        console.log(err)
    }

    //SUCESSO: BUSCAR POR DOCUMENTO 123:
    try {
        const cliente123 = await clienteNegocio.buscarPorDocumento(123);
        console.log("Buscar cliente documento = 123", cliente123);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: BUSCAR POR DOCUMENTO INEXISTENTE:
    try {
        const cliente000 = await clienteNegocio.buscarPorDocumento(7890);
        console.log("Buscar cliente documento = 7890", cliente000);
    }catch(err){
        console.log(err)
    }

    //SUCESSO: ATUALIZA COD_CLI 2:
    try {
        const clienteAtualizado = await clienteNegocio.atualizar(1, { nome: 'cliente novo nome', documento: 555});
        console.log("Cliente atualizado", clienteAtualizado);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: ATUALIZA COD_CLI 100 INEXISTENTE:
    try {
        const clienteAtualizado = await clienteNegocio.atualizar(100, { nome: 'cliente novo nome', documento: 555});
        console.log("Cliente atualizado", clienteAtualizado);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: PARÂMETRO DOCUMENTO É STRING:
    try {
        const clienteAtualizado = await clienteNegocio.atualizar(1, { nome: 'cliente novo nome', documento: "25a"});
        console.log("Cliente atualizado", clienteAtualizado);
    }catch(err){
        console.log(err)
    }

    //SUCESSO: DELETAR COD_CLI 1:
    try {
        const clienteDeletado = await clienteNegocio.deletar(1);
        console.log("Cliente deletado cod_cli 1", clienteDeletado);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: DELETAR COD_CLI 100 INEXISTENTE:
    try {
        const clienteDeletado = await clienteNegocio.deletar(100);
        console.log("Cliente deletado", clienteDeletado);
    }catch(err){
        console.log(err)
    }

    // ----------------- TESTES VEÍCULOS --------------------

    //SUCESSO: LISTAR VEÍCULOS:
    try {
        const veiculolistado = await veiculoNegocio.listar()
        console.log("Lista de  Veiculos", veiculolistado);
    } catch (err) { 
        console.log(err);
    }

    //SUCESSO: INCLUIR VEÍCULO:
    try {
        const veiculoInserido1 = await veiculoNegocio.inserir({modelo: "sandero", marca: 'renault', chassi: 234, status: 'livre'})
        console.log("Veiculo1 Inserido", veiculoInserido1);
    } catch (err) { 
        console.log(err);
    }

    //SUCESSO: INCLUIR VEÍCULO:
    try {
        const veiculoInserido2 = await veiculoNegocio.inserir({modelo: "onix", marca: 'chevrolet', chassi: 789, status: 'livre'})
        console.log("Veiculo2 Inserido", veiculoInserido2);
    } catch (err) { 
        console.log(err);
    }

    //INSUCESSO: INCLUIR VEÍCULO SÓ NOME:
    try {
        const veiculoInserido2 = await veiculoNegocio.inserir({modelo: "sandero"})
        console.log("Veiculo Inserido", veiculoInserido2);
    } catch (err) { 
        console.log(err);
    }
    
    //SUCESSO: BUSCAR VEÍCULO COM COD_AUTO 1:
    try {
            const veiculoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(1)
            console.log("Veiculo cod_auto 1 Localizado:", veiculoBuscadoPorCod_auto);
        } catch (err) { 
            console.log(err);
        }
    //INSUCESSO: BUSCAR VEÍCULO COM COD_AUTO INEXISTENTE:
    try {
        const veiculoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(100)
        console.log("Veiculo cod_auto 100 Localizado:", veiculoBuscadoPorCod_auto);
    } catch (err) { 
        console.log(err);
    }

    //SUCESSO: BUSCAR POR NOME DE MODELO COM A LETRA 'n':
    try {
        const veiculoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('n')
        console.log("Veiculo Localizado Pelo Modelo:", veiculoBuscadoPorModelo);
    } catch (err) { 
        console.log(err);
    }

    //INSUCESSO: BUSCAR POR NOME DE MODELO COM A LETRA INEXISTENTE:
    try {
        const veiculoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('h')
        console.log("Veiculo Localizado Pelo Modelo:", veiculoBuscadoPorModelo);
    } catch (err) { 
        console.log(err);
    }

    //SUCESSO: BUSCAR POR CHASSI = 234:
    try {
        const veiculoBuscadoPorChassi = await veiculoNegocio.buscarPorChassi(234)
        console.log("Veículo de chassi 234:", veiculoBuscadoPorChassi);
    } catch (err) {
        console.log(err);
    }

    //INSUCESSO: BUSCAR POR CHASSI INEXISTENTE:
    try {
        const veiculoBuscadoPorChassi = await veiculoNegocio.buscarPorChassi(1000)
        console.log("Veículo de chassi 1000:", veiculoBuscadoPorChassi);
    } catch (err) {
        console.log(err);
    }

    //SUCESSO: ATUALIZAR VEÍCULO COD_AUTO = 1:
    try {
        const veiculoAtualizado = await veiculoNegocio.atualizar(1,{modelo:'captiva', marca: 'chevrolet', chassi: 999, status: 'livre'})
        console.log("Veiculo Atualizado:", veiculoAtualizado);
    } catch (err) { 
        console.log(err);
    }

    //INSUCESSO: ATUALIZAR VEÍCULO COD_AUTO INEXISTENTE:
    try {
        const veiculoAtualizado = await veiculoNegocio.atualizar(100,{modelo:'captiva', marca: 'chevrolet', chassi: 999, status: 'livre'})
        console.log("Veiculo Atualizado:", veiculoAtualizado);
    } catch (err) { 
        console.log(err);
    }

    //INSUCESSO: ATUALIZAR VEÍCULO SEM ALGUNS PARÂMETROS:
    try {
        const veiculoAtualizado = await veiculoNegocio.atualizar(1,{modelo:'captiva', marca: 'chevrolet'})
        console.log("Veiculo Atualizado:", veiculoAtualizado);
    } catch (err) { 
        console.log(err);
    }

    //SUCESSO: DELETAR:
    try {
        const veiculodeletado = await veiculoNegocio.deletar(1)
        console.log("Veiculo Deletado:", veiculodeletado);
    } catch (err) { 
        console.log(err);
    }

    //INSUCESSO: DELETAR:
    try {
        const veiculodeletado = await veiculoNegocio.deletar(1000)
        console.log("Veiculo Deletado:", veiculodeletado);
    } catch (err) { 
        console.log(err);
    }
    
    // ------------ TESTES LOCAÇÃO ------------------------

    //LISTAR LOCAÇÃO VAZIA:
    try {
        const listaLocacao = await locacaoNegocio.listar()
        console.log("Lista das locações: ", listaLocacao)
    }catch(err){
        console.log(err)
    }

    //SUCESSO: INSERIR LOCAÇÃO:
    try {
        const locacao1 = await locacaoNegocio.inserir({cod_cli: 2, cod_auto: 2});
        console.log("Locação incluída: ", locacao1);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: INSERIR LOCAÇÃO COD_CLI INEXISTENTE:
    try {
        const locacao1 = await locacaoNegocio.inserir({cod_cli: 20, cod_auto: 2});
        console.log("Locação incluída: ", locacao1);
    }catch(err){
        console.log(err)
    }

    //INSUCESSO: INSERIR LOCAÇÃO COD_AUTO INEXISTENTE:
    try {
        const locacao1 = await locacaoNegocio.inserir({cod_cli: 2, cod_auto: 100});
        console.log("Locação incluída: ", locacao1);
    }catch(err){
        console.log(err)
    }
    
    //LISTAR LOCAÇÃO COM UMA INCLUSÃO:
    try {
        const listaLocacao = await locacaoNegocio.listar()
        console.log("Lista das locações: ", listaLocacao)
    }catch(err){
        console.log(err)
    }

    //SUCESSO: BUSCAR LOCAÇÃO POR COD_LOC = 1:
    try {
        const locacaoBuscar = await locacaoNegocio.buscarPorCod_loc(1)
        console.log("Locação de código 1 localizada: ", locacaoBuscar)
    } catch (err) {
        console.log(err)
    }

    //INSUCESSO: BUSCAR LOCAÇÃO POR COD_LOC INEXISTENTE:
    try {
        const locacaoBuscar = await locacaoNegocio.buscarPorCod_loc(100)
        console.log("Locação de código 100 localizada: ", locacaoBuscar)
    } catch (err) {
        console.log(err)
    }

    //SUCESSO: ATUALIZAR DEVOLUÇÃO DE VEÍCULO COD_AUTO = 2 (EXISTENTE):
    try {
        const devolucaoAtualizada = await locacaoNegocio.atualizarDevolucao(2)
        console.log("Veículo devolvido: ", devolucaoAtualizada)
    } catch (err) {
        console.log(err)
    }

    //INSUCESSO: ATUALIZAR DEVOLUÇÃO DE VEÍCULO COD_AUTO INEXISTENTE:
    try {
        const devolucaoAtualizada = await locacaoNegocio.atualizarDevolucao(100)
        console.log("Veículo devolvido: ", devolucaoAtualizada)
    } catch (err) {
        console.log(err)
    }

    // SUCESSO: DELETER UMA LOCAÇÃO - PELA REGRA DE NEGÓCIO, NÃO HÁ MOTIVO PARA DELETER UMA LOCAÇÃO:
    try {
        const locacaoDeletada = await locacaoNegocio.deletar(1)
        console.log("Locação 1 deletada: ", locacaoDeletada)
    } catch (err) {
        console.log(err)
    }

    // INSUCESSO: DELETER UMA LOCAÇÃO INEXISTENTE - PELA REGRA DE NEGÓCIO, NÃO HÁ MOTIVO PARA DELETER UMA LOCAÇÃO:
    try {
        const locacaoDeletada = await locacaoNegocio.deletar(1)
        console.log("Locação 1 deletada: ", locacaoDeletada)
    } catch (err) {
        console.log(err)
    }

}



module.exports = {
    main
}