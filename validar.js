var rut = document.getElementById('rut');
var apellidopaterno = document.getElementById('apellidopaterno')
var rapellidomaterno = document.getElementById('apellidomaterno');
var nombre = document.getElementById('nombre');
var fechanacimiento = document.getElementById('fechanacimiento');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var profesion = document.getElementById('profesion');
var motivacion = document.getElementById('motivacion');

var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        var mensajesError = [];

       
        if(rut.value.length < 9 || rut.value.length > 10) {
            mensajesError.push("El rut debe tener entre 9 y 10 caracteres.");
        }

        
        if(apellidopaterno.value.length < 3 || apellidopaterno.value.length > 20){
            mensajesError.push("El apellido paterno debe tener entre 3 y 20 caracteres");
        }

        if(rapellidomaterno.value.length < 3 || rapellidomaterno.value.length > 20){
            mensajesError.push("El apellido materno debe tener entre 3 y 20 caracteres");
        }

        if(nombre.value.length < 3 || nombre.value.length > 20){
            mensajesError.push("El nombre debe tener entre 3 y 20 caracteres");
        }

        if(fechanacimiento.value === null || fechanacimiento.value === ''){
            mensajesError.push("Ingresa tu fecha de nacimiento");
        }
        if(edad.value === null || edad.value === ''){
            mensajesError.push("Ingresa tu edad");
        }
        if(genero.value === null || genero.value === ''){
            mensajesError.push("Ingresa tu género");
        }
        if(email.value === null || email.value === ''){
            mensajesError.push("Ingresa tu email");
        }
        if(celular.value.length < 9 || celular.value.length < 12 ){
            mensajesError.push("Ingresa tu celular");
        }
        if(profesion.value === null || profesion.value === ''){
            mensajesError.push("Ingresa tu profesión");
        }
        
        if(motivacion.value === null || motivacion.value === ''){
            mensajesError.push("Ingresa tu motivacin");
        }


        

        error.innerHTML = mensajesError.join(', ');
        return false;       
    });