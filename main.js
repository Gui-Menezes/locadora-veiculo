const veiculoPersistence = require('./persistence/veiculo_persistence')
const veiculoNegocio = require('./negocio/veiculo_negocio')


async function main() {

    
    try {
        const veiculolistado = await veiculoNegocio.listar()
        console.log("Lista de  Veiculos", veiculolistado);
    } catch (err) { 
        console.log(err);
    }

    try {
        const veiculoInserido1 = await veiculoNegocio.inserir({modelo: "onix", marca: 'Chevrolet', status: 'livre'})
        console.log("Veiculo Inserido", veiculoInserido1);
    } catch (err) { 
        console.log(err);
    }

    try {
        const veiculoInserido2 = await veiculoNegocio.inserir({modelo: "Sandero"})
        console.log("Veiculo Inserido", veiculoInserido2);
    } catch (err) { 
        console.log(err);
    }
    
    try {
            const produtoBuscadoPorCod_auto = await veiculoNegocio.buscarPorCod_auto(2)
            console.log("Veiculo Localizado:", produtoBuscadoPorCod_auto);
        } catch (err) { 
            console.log(err);
        }

    try {
        const produtoBuscadoPorModelo = await veiculoNegocio.buscarPorModelo('traker')
        console.log("Veiculo Localizado Pelo Modelo:", produtoBuscadoPorModelo);
    } catch (err) { 
        console.log(err);
    }
    
    try {
        const veiculoAtualizado = await veiculoNegocio.atualizar(4,{modelo:'Captiva', marca: 'Chevrolet', status: 'Livre'})
        console.log("Veiculo Atualizado:", veiculoAtualizado);
    } catch (err) { 
        console.log(err);
    }

    try {
        const veiculodeletado = await veiculoNegocio.deletar(8)
        console.log("Veiculo Deletado:", veiculodeletado);
    } catch (err) { 
        console.log(err);
    }

// const listaVeiculos = await veiculoPersistence.listar();
//     console.log("Lista de Veiculos",listaVeiculos);

// const veiculoInserido = await veiculoPersistence.inserir({modelo: "Ranger", marca: "Ford", status: "Livre"})
//     console.log("Veiculo Inserido", veiculoInserido);
    
//     const veiculo2 = await veiculoPersistence.buscarPorCod_auto(2);
//     console.log("Veiculo Cod_auto(2)", veiculo2);

    // const veiculoCelta = await veiculoPersistence.buscarPorModelo('Celta');
    // console.log("Veiculo Celta", veiculoCelta);

    // const veiculoAtualizado = await veiculoPersistence.atualizar(2, {modelo: 'Prisma', marca: 'Chevrolet', status: 'Livre'});
    // console.log("Veiculo atualizado", veiculoAtualizado);

    // const veiculoDeletado = await veiculoPersistence.deletar(6);
    // console.log("veiculo deletado", veiculoDeletado);

}

main();