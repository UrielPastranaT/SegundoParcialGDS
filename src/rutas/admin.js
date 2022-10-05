const express = require("express");
const route = express.Router();
const controlador_Admin = require("../controladores/controlador_Admin")

route.get("/", function(req, res){
    res.render("indexAdmin.ejs");
});

route.get("/iniciarRegistro", function(req, res){
    res.render("registrarAdmin.ejs");
});

/* route.get("/inicioAdmin", function(req, res){
    res.render("mostrarPeliculasAdmin.ejs");
}); */

route.post("/iniciar",           controlador_Admin.iniciar);
route.post("/cerrar",            controlador_Admin.cerrar);
route.post("/registrar",         controlador_Admin.registrar);

route.get("/formularioPeliculas", function(req, res){
    res.render("editarPelicula.ejs");
});

route.get("/formularioAgregar", function(req, res){
    res.render("nuevaPelicula.ejs");
});

route.get ("/mostrarPelicula",               controlador_Admin.mostrar);
route.post("/nuevaPelicula",                 controlador_Admin.nueva);
route.get("/editarPelicula/:Peli",          controlador_Admin.editar);
route.post("/actualizarPelicula/:Peli",          controlador_Admin.actualizar);
route.get("/eliminarPelicula/:Peli",        controlador_Admin.eliminar);



route.get ("/mostrarClientes",               controlador_Admin.clientes);



module.exports = route;