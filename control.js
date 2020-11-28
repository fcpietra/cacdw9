function validarFormulario(){
    let usuarioValor = document.forms["formulario"]["usuario"].value;
    let claveValor = document.forms["formulario"]["clave"].value;
    if(usuarioValor == '' || claveValor == ''){
        alert("Debe completar todos los campos.");
        input.focus();
        return false;
    }
    let tieneArroba = false;
    for (letra of usuarioValor){
        if(letra==='@'){
            tieneArroba=true;
            break;
        }
    }
    if(!tieneArroba){
        alert("El usuario debe contener el signo @.");
        input.focus();
        return false;
    }
    alert("Formulario enviado correctamente.")
    return true;
}