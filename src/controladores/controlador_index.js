const controlador = {};

controlador.mostrar = (req, res) => {
    if (req.session.usuario)
    {
    req.getConnection((err, conn)=>{
         conn.query("SELECT * FROM peliculas", (error, resultados)=>{
            if(error)
            res.json(error);
            else
            res.render("indexPeliculas.ejs", {data: resultados});
        })
    })
    }
};


// controlador.index = (req, res) => {
//     req.getConnection((err, conn)=>{
//         conn.query("SELECT * FROM alumnos", (error, resultados)=>{
//             if(error)
//             res.json(error);
//             else
//             res.render("index.ejs", {data: resultados});
//         })
//     })
// };

controlador.nuevo = (req, res) =>{
    res.render("alumnos_nuevo.ejs", {usuario: req.session.usuario});
};
controlador.agregar = (req, res) => {
   const regPelicula = {
                        id_Pelicula : req.body.id_Pelicula,
                        Nombre : req.body.Nombre,
                        Clasificacion : req.body.Clasificacion,
                        Genero : req.body.Genero,
                        Estado : req.body.Estado,
                        Horario : req.body.Horario,
   };
   req.getConnection((err,conn)=>{
    if(err)
        throw err;
    else 
    {
        conn.query("INSERT INTO reservaciones SET ?", [regPelicula], (error, resultado) => {
            if(error)
            res.json(error)
            else
            res.redirect("/boletos")
        }
        )
    }
})};

controlador.comprar = (req, res) => {
    const peli = req.params.Peli;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM peliculas WHERE id_Pelicula = ?", [peli], (error, fila)=>{
            res.render("boletos.ejs");
        })
    });
};

controlador.boleto = (req, res) => {
    const boleto = req.params.Boleto;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM boletos WHERE id_Boleto = ?", [boleto], (error, fila)=>{
            res.render("asientos.ejs");
        })
    });
};

controlador.asiento = (req, res) => {
    const asiento = req.params.Asiento;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM boletos WHERE id_Boleto = ?", [asiento], (error, fila)=>{
            res.render("pagos.ejs");
        })
    });
};

controlador.peli = (req, res) => {
    const peli = req.params.Peli;

    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM peliculas WHERE id_Pelicula = ?", [peli], (error, fila)=>{
            res.render("mostrarPeliculas.ejs", {data:fila});
        })
    });
};


controlador.actualizar = (req, res) => {
    const matri = req.params.Matri;

        const regAlumno = {
                                    Matricula : req.body.tfMatricula,
                                    Nombre : req.body.tfNombre,
                                    ApellidoPaterno : req.body.tfApellidoPaterno,
                                    ApellidoMaterno : req.body.tfApellidoMaterno,
                                    Ddi:  parseInt(req.body.tfDdi, 10),
                                    Dwi:  parseInt(req.body.tfDwi, 10),
                                    Ecbd: parseInt(req.body.tfEcbd, 10)
                            };
req.getConnection((err, conn)=>{
        conn.query("UPDATE alumnos SET ? WHERE Matricula = ?", [regAlumno,matri], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/alumnos", {usuario: req.session.usuario})
        })
    });
};

controlador.eliminar = (req, res) => {
    const matri = req.params.Matri;

    req.getConnection((err, conn)=>{
        conn.query("DELETE FROM alumnos WHERE Matricula = ?", [matri], (error, resultado)=>{
           if(error)
           re.json(error)
           else
           res.redirect("/alumnos", {usuario: req.session.usuario})
        })
    });
};

module.exports = controlador;