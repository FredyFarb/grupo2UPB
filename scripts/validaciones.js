
function validar_nombreUsuario(string){
    
    let regxp = /^([a-zA-Z0-9]){4,9}$/;
    let esValido = regxp.test(string);

     return esValido;
}

function validar_contrasena(string){
    
    let regxp = /^([a-zA-Z0-9]){6,}$/;
    let esValido = regxp.test(string);
    
    return esValido;
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
