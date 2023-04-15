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

       
        if (rut.length < 9 || rut.length > 10) {
            errorRut.textContent = "El RUT debe tener entre 9 y 10 caracteres.";
            rutInput.setCustomValidity("Invalid");
          } else {
            errorRut.textContent = "";
            rutInput.setCustomValidity("");
        }
        
       /* if(apellidopaterno.value === null || apellidopaterno.value === ''){
            mensajesError.push("Ingresa tu apellido paterno");
        }
        if(rapellidomaterno.value === null || rapellidomaterno.value === ''){
            mensajesError.push("Ingresa tu rapellido materno");
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
        if(celular.value === null || celular.value === ''){
            mensajesError.push("Ingresa tu celular");
        }
        if(profesion.value === null || profesion.value === ''){
            mensajesError.push("Ingresa tu profesión");
        }
        if(rut.value === null || rut.value === ''){
            mensajesError.push("Ingresa tu nombre");
        }
        if(motivacion.value === null || motivacion.value === ''){
            mensajesError.push("Ingresa tu motivacin");
        }


        */

        error.innerHTML = mensajesError.join(', ');
        return false;       
    });