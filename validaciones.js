function validar_nombreUsuario(string){
    var exRegular = /^([a-zA-Z0-9]){1,16}$/;
    if (string.length > 3 && string.length <= 9){
      if (exRegular.test(string)){
        return true;
      }else{
        
        return false;
      }
    
    }else{
      
      return false;
    }
}

function validar_contrasena(string){
  
    var exRegular = /^([a-zA-Z0-9]){1,16}$/;
    if (string.length >= 6){
      if (exRegular.test(string)){
        return true;
      }else{
        
        return false;
      }
    
    }else{
      
      return false;
    }
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;