const controlador = {}

controlador.mostrar = (req, res) => {
                res.render("alumnos.ejs", {data: resultados});

};

controlador.iniciar = (req, res) => {
    var usu  = req.body.tfUsuario;
    var pass = req.body.tfPassword;
    // console.log(usu, pass) 
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM usuarios WHERE Usuario = ? AND Password = ?", [usu, pass], (error, resultados)=>{
            // console.log(resultados)
            if(resultados.length == 1)
            {
                req.session.usuario = usu;
                req.session.password = pass;

                res.redirect("/indexPeliculas");
            }
            else
            {
                res.redirect("/sesion");
            }
        });
    })
};


controlador.registrar = (req, res) => {
    const regUsuario = {
                        Usuario : req.body.tfUsuario,
                        Password : req.body.tfPassword
                        };
    req.getConnection((err,conn)=>{
        
        conn.query("INSERT INTO usuarios SET ?", [regUsuario], (error, resultado) => {
                res.redirect("/sesion");
            }
        )
    
})};


controlador.cerrar = (req, res) => {
    //delete req.session.usuario;
    //delete req.session.password;
    req.session.destroy();
    res.redirect("/", {usuario: req.session.usuario});
};

module.exports = controlador;