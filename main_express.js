const clienteNegocio = require('./negocio/cliente_negocio')
const locacaoNegocio = require('./negocio/locacao_negocio')
const veiculoNegocio = require('./negocio/veiculo_negocio')
const express = require('express');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

async function main_express() {
    
    const port = 3000

    // //---------------- TESTES CLIENTES ------------------------
    // //INSERIR CLIENTE NOVO:
app.post('/clientes', async (req, res) =>{
    const cliente = req.body;
    try {
        const clienteInserido1 = await clienteNegocio.inserir(cliente);
        res.status(201).json(clienteInserido1);   
    }
    catch(err) {
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});

    // //LISTAR CLIENTES:
app.get('/clientes', async (req, res) => {
    try {
        const listaClientes = await clienteNegocio.listar();
        res.json(listaClientes)
        
    }catch(err){
        res.status(500).json({Erro:"Erro na Aplicacao"});
    }
});

    //// BUSCAR COD_CLI :

app.get('/clientes/:cod_cli', async (req, res) => {
    const cod_cli = req.params.cod_cli;
    try{
        const cliente2 = await clienteNegocio.buscarPorCodCli(cod_cli);
        res.json(cliente2);
    }
    catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});

     // // BUSCAR POR NOME:
    app.get('/clientes/nome/:nome', async (req, res) =>{
    const nome = req.params.nome;
    try {
        const clienteE = await clienteNegocio.buscarPorNome(nome);
        res.json(clienteE);
    }catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});

    // // BUSCAR POR DOCUMENTO:
app.get('/clientes/documento/:documento', async (req, res) => { 
    const documento = req.params.documento;
    try {
        const cliente123 = await clienteNegocio.buscarPorDocumento(documento);
        res.json(cliente123);
    }
    catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});

// // // ATUALIZAR CLIENTE:

app.put('/clientes/:cod_cli', async (req, res) => {  
    const cod_cli = req.params.cod_cli;
    let pessoa = req.body;
        try {
        const clienteAtualizado = await clienteNegocio.atualizar(cod_cli, pessoa);
        res.json(clienteAtualizado);
    }catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            console.log(err);
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});

// // // DELETAR CLIENTE:
    
app.delete('/clientes/:cod_cli', async (req, res) => {
    const cod_cli = req.params.cod_cli
    try {
        const clienteDeletado = await clienteNegocio.deletar(cod_cli)
        res.json(clienteDeletado);
    }catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});

    // // ----------------- TESTES VEÍCULOS --------------------

    // // LISTAR VEÍCULOS:
app.get('/veiculos', async (req, res) => {
    try {
        const veiculolistado = await veiculoNegocio.listar()
        res.json(veiculolistado);
    } catch (err) { 
        res.status(500).json({Erro:"Erro na Aplicacao"});
    }
});

    // //INCLUIR VEÍCULO:

app.post('/veiculos', async (req, res) => {
    const veiculo = req.body;
    try {
        const veiculoInserido1 = await veiculoNegocio.inserir(veiculo)
        res.status(201).json(veiculoInserido1);
    } catch (err) { 
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});


    // //SUCESSO: BUSCAR VEÍCULO COM COD_AUT:
app.get('/veiculos/:cod_auto', async (req, res) => {
    const cod_auto = req.params.cod_auto
    try {
        const veiculoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(cod_auto)
        res.json(veiculoBuscadoPorCod_auto);
    } catch (err) { 
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});

// //BUSCAR VEÍCULO POR MODELO:
app.get('/veiculos/modelo/:modelo', async (req, res) => {
    const modelo = req.params.modelo
    try {
        const veiculoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo(modelo);
        res.json(veiculoBuscadoPorModelo);
    } catch (err) { 
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});

// //BUSCAR VEICULO POR POR CHASSI:
app.get('/veiculos/chassi/:chassi', async (req, res) => {
    const chassi = req.params.chassi
    try {
        const veiculoBuscadoPorChassi = await veiculoNegocio.buscarPorChassi(chassi)
        res.json(veiculoBuscadoPorChassi);
    } catch (err) {
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});


// //ATUALIZAR VEÍCULO COD_AUTO:
app.put('/veiculos/:cod_auto', async (req, res) => {
    const cod_auto = req.params.cod_auto
    let veiculo = req.body;
    try {
        const veiculoAtualizado = await veiculoNegocio.atualizar(cod_auto,veiculo)
        res.json(veiculoAtualizado);
    } catch (err) { 
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});

// //DELETAR VEICULO:
app.delete('/veiculos/:cod_auto', async (req, res) => {
    const cod_auto = req.params.cod_auto
    try {
        const veiculodeletado = await veiculoNegocio.deletar(cod_auto)
        res.json(veiculodeletado);
    } catch (err) { 
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});


// // ------------ TESTES LOCAÇÃO ------------------------

// //LISTAR LOCAÇÃO:
app.get('/locacoes', async (req, res) => {
    try {
        const listaLocacao = await locacaoNegocio.listar()
        res.json(listaLocacao)
    }catch(err){
        res.status(500).json({Erro:"Erro na Aplicacao"});
    }
});


// // INSERIR LOCAÇÃO:
app.post('/locacoes', async (req, res) => {
    const locacao = req.body;
    try {
        const locacao1 = await locacaoNegocio.inserir(locacao);
        res.status(201).json(locacao1);
    }catch(err){
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});


// //BUSCAR LOCAÇÃO POR COD_LOC:
app.get('/locacoes/:cod_loc', async (req, res) => {
    const cod_loc = req.params.cod_loc;
    try {
        const locacaoBuscar = await locacaoNegocio.buscarPorCod_loc(cod_loc)
        res.json(locacaoBuscar)
    } catch (err) {
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }
    }
});


// //ATUALIZAR DEVOLUÇÃO DE VEÍCULO POR COD_AUTO:
app.put('/locacoes/:cod_auto', async (req, res) => {
    const cod_auto = req.params.cod_auto;
    // let veiculo = req.body;
    try {
        const devolucaoAtualizada = await locacaoNegocio.atualizarDevolucao(cod_auto)
        res.json(devolucaoAtualizada)
    } catch (err) {
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            console.log(err);
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }        
    }
});

    // // DELETER UMA LOCAÇÃO - PELA REGRA DE NEGÓCIO, NÃO HÁ MOTIVO PARA DELETER UMA LOCAÇÃO:
app.delete('/locacoes/:cod_loc', async (req, res) => {
    const cod_loc = req.params.cod_loc
    try {
        const locacaoDeletada = await locacaoNegocio.deletar(cod_loc)
        res.json(locacaoDeletada)
    } catch (err) {
        if(err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicacao"});
        }     
    }
});


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});

}


module.exports = {
main_express
}