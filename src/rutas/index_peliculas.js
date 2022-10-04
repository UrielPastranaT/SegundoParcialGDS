const express = require("express");
const route = express.Router();
const controlador_index = require("../controladores/controlador_index")


route.get ("/",                          controlador_index.mostrar);
// route.get ("/comprar/:Peli",          controlador_index.comprar);
// route.get ("/seleccionar/:Boleto",    controlador_index.boleto);
route.get ("/seleccionar/:Peli",         controlador_index.peli);
// route.get ("/mostrarPeli/:Peli",             controlador_index.url);
// route.get ("/seleccionar/:Asiento",   controlador_index.asiento);

module.exports = route;