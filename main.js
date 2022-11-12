const veiculoNegocio = require('./negocio/veiculo_negocio')


async function main() {

    
    try {
        const veiculolistado = await veiculoNegocio.listar()
        console.log("Lista de  Veiculos", veiculolistado);
    } catch (err) { 
        console.log(err);
    }

    // try {
    //     const veiculoInserido1 = await veiculoNegocio.inserir({modelo: "onix", marca: 'Chevrolet', status: 'livre'})
    //     console.log("Veiculo Inserido", veiculoInserido1);
    // } catch (err) { 
    //     console.log(err);
    // }

    // try {
    //     const veiculoInserido2 = await veiculoNegocio.inserir({modelo: "Sandero"})
    //     console.log("Veiculo Inserido", veiculoInserido2);
    // } catch (err) { 
    //     console.log(err);
    // }
    
    // try {
    //         const produtoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(4)
    //         console.log("Veiculo Localizado:", produtoBuscadoPorCod_auto);
    //     } catch (err) { 
    //         console.log(err);
    //     }

    // try {
    //     const produtoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('onix')
    //     console.log("Veiculo Localizado Pelo Modelo:", produtoBuscadoPorModelo);
    // } catch (err) { 
    //     console.log(err);
    // }
    
    // try {
    //     const veiculoAtualizado = await veiculoNegocio.atualizar(10,{modelo:'Captiva', marca: 'Chevrolet', status: 'Livre'})
    //     console.log("Veiculo Atualizado:", veiculoAtualizado);
    // } catch (err) { 
    //     console.log(err);
    // }

    // try {
    //     const veiculodeletado = await veiculoNegocio.deletar(10)
    //     console.log("Veiculo Deletado:", veiculodeletado);
    // } catch (err) { 
    //     console.log(err);
    // }


}

main();