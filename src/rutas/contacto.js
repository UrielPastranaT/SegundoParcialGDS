const express = require("express");
const route = express.Router();
const controlador_Contacto = require("../controladores/controlador_Contacto")

route.get("/vistaContacto", function(req, res){
    res.render("contacto.ejs");
});

route.post ("/enviarMensaje",             controlador_Contacto.enviar);



module.exports = route;