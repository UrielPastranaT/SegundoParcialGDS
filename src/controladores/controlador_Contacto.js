const controlador = {}

controlador.enviar = (req, res) => {
    const dataMensaje = {
                        Nombre :  req.body.tfNombre,
                        Email :   req.body.tfEmail,
                        Tema :    req.body.tfTema,
                        Mensaje : req.body.tfMensaje
                        };
    req.getConnection((err,conn)=>{
        conn.query("INSERT INTO contacto SET ?", [dataMensaje], (error, resultado) => {
                res.redirect("/contacto/vistaContacto");
            }
        )
})};




module.exports = controlador;