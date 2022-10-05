const controlador = {}


controlador.iniciar = (req, res) => {
    var usu  = req.body.tfUsuario;
    var pass = req.body.tfPassword;
    // console.log(usu, pass) 
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM admin WHERE Usuario = ? AND Password = ?", [usu, pass], (error, resultados)=>{
            // console.log(resultados)
            if(resultados.length == 1)
            {
                req.session.usuario = usu;
                req.session.password = pass;

                res.redirect("/admin/mostrarPelicula");
            }
            else
            {
                res.redirect("/admin");
            }
        });
    })
};

controlador.registrar = (req, res) => {
    const regAdmin = {
                        Usuario : req.body.tfUsuario,
                        Password : req.body.tfPassword
                        };
    req.getConnection((err,conn)=>{
        conn.query("INSERT INTO admin SET ?", [regAdmin], (error, resultado) => {
                res.redirect("/admin");
            }
        )
})};

controlador.mostrar = (req, res) => {
    req.getConnection((err, conn)=>{
         conn.query("SELECT * FROM peliculas", (error, resultados)=>{
            if(error)
            res.json(error);
            else
            res.render("mostrarPeliculasAdmin.ejs", {data: resultados});
        })
    })
};

controlador.editar = (req, res) => {
    const peli = req.params.Peli;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM peliculas WHERE id_Pelicula = ?", [peli], (error, fila)=>{
            res.render("editarPelicula.ejs", {data:fila});
        })
    });
};

controlador.nueva = (req, res) => {
        const dataPeli = {
                                    Nombre        : req.body.tfNombre,
                                    Clasificacion : req.body.tfClasificacion,
                                    Genero        : req.body.tfGenero,
                                    Estado        : req.body.tfEstado,
                                    Imagen        : req.body.tfImagen,
                                    Horario       : req.body.tfHorario,
                                    Url           : req.body.tfUrl,
                            };
req.getConnection((err, conn)=>{
        conn.query("INSERT INTO peliculas SET ?", [dataPeli], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/admin/mostrarPelicula")
        })
    });
};


controlador.actualizar = (req, res) => {
    const peli = req.params.Peli;

        const dataPeli = {
                                    Nombre        : req.body.tfNombre,
                                    Clasificacion : req.body.tfClasificacion,
                                    Genero        : req.body.tfGenero,
                                    Estado        : req.body.tfEstado,
                                    Imagen        : req.body.tfImagen,
                                    Horario       : req.body.tfHorario,
                                    Url           : req.body.tfUrl,
                            };
req.getConnection((err, conn)=>{
        conn.query("UPDATE peliculas SET ? WHERE id_Pelicula = ?", [dataPeli, peli], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/admin/mostrarPelicula")
        })
    });
};

controlador.eliminar = (req, res) => {
    const peli = req.params.Peli;

    req.getConnection((err, conn)=>{
        conn.query("DELETE FROM peliculas WHERE id_Pelicula = ?", [peli], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/admin/mostrarPelicula")
        })
    });
};

controlador.clientes = (req, res) => {
    req.getConnection((err, conn)=>{
         conn.query("SELECT * FROM contacto", (error, resultados)=>{
            if(error)
            res.json(error);
            else
            res.render("adminClientes.ejs", {data: resultados});
        })
    })
};

controlador.cerrar = (req, res) => {
    //delete req.session.usuario;
    //delete req.session.password;
    req.session.destroy();
    res.redirect("/", {usuario: req.session.usuario});
};

module.exports = controlador;