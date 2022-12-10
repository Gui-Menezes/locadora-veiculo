const { main } = require('./main')
const { main_express } = require('./main_express')
const clienteNegocio = require('./negocio/cliente_negocio')
const locacaoNegocio = require('./negocio/locacao_negocio')
const veiculoNegocio = require('./negocio/veiculo_negocio')
const express = require('express')
const app = express()
const port = 3000

//main()

main_express()