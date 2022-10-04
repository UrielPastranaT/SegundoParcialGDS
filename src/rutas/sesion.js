const express = require("express");
const route = express.Router();
const controlador_Sesion = require("../controladores/controlador_Sesion")

route.get("/", function(req, res){
    res.render("iniciarSesion.ejs");
});

route.get("/registro", function(req, res){
    res.render("registrarUsuario.ejs");
});

route.post("/iniciar",               controlador_Sesion.iniciar);
route.post("/cerrar",                controlador_Sesion.cerrar);
route.post("/registrar",             controlador_Sesion.registrar);

module.exports = route;