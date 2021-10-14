let registros = [];

function validar_capcha(rcapcha){

    if (rcapcha==5){
        return true;
    }else{
        return false;
    }
}


function iniciar_sesion(usuario, contrasena,rcapcha){
    if (validar_capcha(rcapcha)){
        for (var registro of registros){
            if(registro.usuario==usuario && registro.contrasena==contrasena){
                return true;
            }else{
                continue;
            }
        }
    }else{
        return false;
    }
    return false;
}

module.exports.registros = registros;
module.exports.validar_capcha= validar_capcha;
module.exports.iniciar_sesion = iniciar_sesion;