

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



//reto 3

let registros = [];

function agregarRegistro(){
    var registro = new Object();
    let usuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;
   // if (validar_nombreUsuario(usuario) && validar_contrasena(contrasena)){
      registro.usuario= usuario;
      registro.contrasena= contrasena
      registros.push(registro);
    //}
    
    
}

function filtrarPorContrasena(arreglo,filtro){
  let i =0;
  let nuevoArreglo=[];
  arreglo.forEach(function(registro){
    i++;
    if(registro["contrasena"].length <= filtro){
        nuevoArreglo.push(registro);
    } 
  });

  return nuevoArreglo;
}





module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
