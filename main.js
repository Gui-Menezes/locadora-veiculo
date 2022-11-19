const clienteNegocio = require('./negocio/cliente_negocio')
const locacaoNegocio = require('./negocio/locacao_negocio')
const veiculoPersistencia = require('./persistencia/veiculo_persistencia')

async function main() {

    // // ---------------- TESTES CLIENTES ------------------------
    // // SUCESSO: INSERIR CLIENTE NOVO:
    // try {
    //     const clienteInserido1 = await clienteNegocio.inserir({nome: "ClienteX", documento: 123})
    //     console.log("Cliente Inserido", clienteInserido1);
    // }catch(err) {
    //     console.log(err)
    // }
    
    // //INSUCESSO: INSERIR CLIENTE COM DOCUMENTO JÁ EXISTENTE NO BD:
    // try {
    //     const clienteInserido1 = await clienteNegocio.inserir({nome: "ClienteX", documento: 888})
    //     console.log("Cliente Inserido", clienteInserido1);
    // }catch(err) {
    //     console.log(err)
    // }
    
    // //INSUCESSO: PARÂMETRO DOCUMENTO VAZIO:
    // try {
    //     const clienteInserido2 = await clienteNegocio.inserir({nome: "ClienteY"})
    //     console.log("Cliente Inserido", clienteInserido2);
    // }catch(err) {
    //     console.log(err)
    // }

    // //INSUCESSO: PARÂMETRO NOME VAZIO:
    // try {
    //     const clienteInserido2 = await clienteNegocio.inserir({documento: 456})
    //     console.log("Cliente Inserido", clienteInserido2);
    // }catch(err) {
    //     console.log(err)
    // }

    // // SUCESSO: LISTAR CLIENTES:
    // try {
    //     const listaClientes = await clienteNegocio.listar();
    //     console.log("Lista de Clientes",listaClientes);
    // }catch(err){
    //     console.log(err)
    // }

    // // SUCESSO: BUSCAR COD_CLI 2:
    // try {
    //     const cliente2 = await clienteNegocio.buscarPorCodCli(2);
    //     console.log("Cliente 2", cliente2);
    // }catch(err){
    //     console.log(err)
    // }

    // // INSUCESSO: BUSCAR COD_CLI 100:
    // try {
    //     const cliente2 = await clienteNegocio.buscarPorCodCli(100);
    //     console.log("Buscar cliente cod_cli 100", cliente2);
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: BUSCAR NOME QUE POSSUI LETRA 'A':
    // try {
    //     const clienteA = await clienteNegocio.buscarPorNome('A');
    //     console.log("Buscar cliente nome com letra = A", clienteA);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: BUSCAR NOME QUE POSSUI LETRA INEXISTENTE:
    // try {
    //     const clienteA = await clienteNegocio.buscarPorNome('W');
    //     console.log("Buscar cliente nome com letra = W", clienteA);
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: BUSCAR POR DOCUMENTO 123:
    // try {
    //     const cliente123 = await clienteNegocio.buscarPorDocumento(123);
    //     console.log("Buscar cliente documento = 123", cliente123);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: BUSCAR POR DOCUMENTO INEXISTENTE:
    // try {
    //     const cliente000 = await clienteNegocio.buscarPorDocumento(7890);
    //     console.log("Buscar cliente documento = 7890", cliente000);
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: ATUALIZA COD_CLI 2:
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(2, { nome: 'AtualizadoComSucesso', documento: 555});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: ATUALIZA COD_CLI 100 INEXISTENTE:
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(100, { nome: 'MaisNovoNome', documento: 555});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: PARÂMETRO DOCUMENTO É STRING:
    // try {
    //     const clienteAtualizado = await clienteNegocio.atualizar(4, { nome: 'NomeAtualizado', documento: "25a"});
    //     console.log("Cliente atualizado", clienteAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: DELETAR COD_CLI 5:
    // try {
    //     const clienteDeletado = await clienteNegocio.deletar(5);
    //     console.log("Cliente deletado cod_cli 5", clienteDeletado);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: DELETAR COD_CLI 100 INEXISTENTE:
    // try {
    //     const clienteDeletado = await clienteNegocio.deletar(100);
    //     console.log("Cliente deletado", clienteDeletado);
    // }catch(err){
    //     console.log(err)
    // }

    // // ----------------- TESTES VEÍCULOS --------------------

    // //SUCESSO: LISTAR VEÍCULOS:
    // try {
    //     const veiculolistado = await veiculoNegocio.listar()
    //     console.log("Lista de  Veiculos", veiculolistado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //SUCESSO: INCLUIR VEÍCULO:
    // try {
    //     const veiculoInserido1 = await veiculoNegocio.inserir({modelo: "Sandero", marca: 'Renault', chassi: 456, status: 'livre'})
    //     console.log("Veiculo Inserido", veiculoInserido1);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //INSUCESSO: INCLUIR VEÍCULO SÓ NOME:
    // try {
    //     const veiculoInserido2 = await veiculoNegocio.inserir({modelo: "sandero"})
    //     console.log("Veiculo Inserido", veiculoInserido2);
    // } catch (err) { 
    //     console.log(err);
    // }
    
    // //SUCESSO: BUSCAR VEÍCULO COM COD_AUTO 1:
    // try {
    //         const veiculoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(1)
    //         console.log("Veiculo cod_auto 1 Localizado:", veiculoBuscadoPorCod_auto);
    //     } catch (err) { 
    //         console.log(err);
    //     }
    // //INSUCESSO: BUSCAR VEÍCULO COM COD_AUTO INEXISTENTE:
    // try {
    //     const veiculoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(100)
    //     console.log("Veiculo cod_auto 100 Localizado:", veiculoBuscadoPorCod_auto);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //SUCESSO: BUSCAR POR NOME DE MODELO COM A LETRA 'n':
    // try {
    //     const veiculoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('n')
    //     console.log("Veiculo Localizado Pelo Modelo:", veiculoBuscadoPorModelo);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //INSUCESSO: BUSCAR POR NOME DE MODELO COM A LETRA INEXISTENTE:
    // try {
    //     const veiculoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('h')
    //     console.log("Veiculo Localizado Pelo Modelo:", veiculoBuscadoPorModelo);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //SUCESSO: BUSCAR POR CHASSI = 999:
    // try {
    //     const veiculoBuscadoPorChassi = await veiculoNegocio.buscarPorChassi(999)
    //     console.log("Veículo de chassi 999:", veiculoBuscadoPorChassi);
    // } catch (err) {
    //     console.log(err);
    // }

    // //INSUCESSO: BUSCAR POR CHASSI INEXISTENTE:
    // try {
    //     const veiculoBuscadoPorChassi = await veiculoNegocio.buscarPorChassi(1000)
    //     console.log("Veículo de chassi 1000:", veiculoBuscadoPorChassi);
    // } catch (err) {
    //     console.log(err);
    // }

    // //SUCESSO: ATUALIZAR VEÍCULO COD_AUTO = 1:
    // try {
    //     const veiculoAtualizado = await veiculoNegocio.atualizar(1,{modelo:'captiva', marca: 'chevrolet', chassi: 999, status: 'livre'})
    //     console.log("Veiculo Atualizado:", veiculoAtualizado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //INSUCESSO: ATUALIZAR VEÍCULO COD_AUTO INEXISTENTE:
    // try {
    //     const veiculoAtualizado = await veiculoNegocio.atualizar(100,{modelo:'captiva', marca: 'chevrolet', chassi: 999, status: 'livre'})
    //     console.log("Veiculo Atualizado:", veiculoAtualizado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //INSUCESSO: ATUALIZAR VEÍCULO SEM ALGUNS PARÂMETROS:
    // try {
    //     const veiculoAtualizado = await veiculoNegocio.atualizar(1,{modelo:'captiva', marca: 'chevrolet'})
    //     console.log("Veiculo Atualizado:", veiculoAtualizado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //SUCESSO: DELETAR:
    // try {
    //     const veiculodeletado = await veiculoNegocio.deletar(2)
    //     console.log("Veiculo Deletado:", veiculodeletado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // //INSUCESSO: DELETAR:
    // try {
    //     const veiculodeletado = await veiculoNegocio.deletar(2)
    //     console.log("Veiculo Deletado:", veiculodeletado);
    // } catch (err) { 
    //     console.log(err);
    // }
    
    // // ------------ TESTES LOCAÇÃO ------------------------

    // //LISTAR LOCAÇÃO:
    // try {
    //     const listaLocacao = await locacaoNegocio.listar()
    //     console.log("Lista das locações: ", listaLocacao)
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: INSERIR LOCAÇÃO:
    // try {
    //     const locacao1 = await locacaoNegocio.inserir({cod_cli: 2, cod_auto: 1});
    //     console.log("Locação incluída: ", locacao1);
    // }catch(err){
    //     console.log(err)
    // }

    // //INSUCESSO: INSERIR LOCAÇÃO:
    // try {
    //     const locacao1 = await locacaoNegocio.inserir({cod_cli: 2, cod_auto: 100});
    //     console.log("Locação incluída: ", locacao1);
    // }catch(err){
    //     console.log(err)
    // }
    
    // //LISTAR LOCAÇÃO:
    // try {
    //     const listaLocacao = await locacaoNegocio.listar()
    //     console.log("Lista das locações: ", listaLocacao)
    // }catch(err){
    //     console.log(err)
    // }

    // //SUCESSO: BUSCAR LOCAÇÃO POR COD_LOC:
    // try {
    //     const locacaoBuscar = await locacaoNegocio.buscarPorCod_loc(2)
    //     console.log("Locação de código 2 localizada: ", locacaoBuscar)
    // } catch (err) {
    //     console.log(err)
    // }

    // //INSUCESSO: BUSCAR LOCAÇÃO POR COD_LOC INEXISTENTE:
    // try {
    //     const locacaoBuscar = await locacaoNegocio.buscarPorCod_loc(100)
    //     console.log("Locação de código 100 localizada: ", locacaoBuscar)
    // } catch (err) {
    //     console.log(err)
    // }

    // //SUCESSO: ATUALIZAR DEVOLUÇÃO DE VEÍCULO COD_AUTO EXISTENTE:
    // try {
    //     const devolucaoAtualizada = await locacaoNegocio.atualizarDevolucao(1)
    //     console.log("Veículo devolvido: ", devolucaoAtualizada)
    // } catch (err) {
    //     console.log(err)
    // }

    // //INSUCESSO: ATUALIZAR DEVOLUÇÃO DE VEÍCULO COD_AUTO INEXISTENTE:
    // try {
    //     const devolucaoAtualizada = await locacaoNegocio.atualizarDevolucao(100)
    //     console.log("Veículo devolvido: ", devolucaoAtualizada)
    // } catch (err) {
    //     console.log(err)
    // }

    // // SUCESSO: DELETER UMA LOCAÇÃO:
    // try {
    //     const locacaoDeletada = await locacaoNegocio.deletar(13)
    //     console.log("Locação 13 deletada: ", locacaoDeletada)
    // } catch (err) {
    //     console.log(err)
    // }

}



module.exports = {
    main
}