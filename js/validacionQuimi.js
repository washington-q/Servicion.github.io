var form = document.querySelector("form");
form.addEventListener('submit', Validar);

function Validar(event) {
    var resultado = true;
    var txtNombres = document.getElementById("nombre");
    var txtApellidos = document.getElementById("apellido");
    var txtEmail = document.getElementById("email");
    var txtTelefono = document.getElementById("tel");
    var txtAsunto = document.getElementById("asunto");
    var txtMensaje = document.getElementById("mensaje");
    var selectSucur= document.getElementById("sucursal");
    var radiosGenero = document.getElementsByName("genero");

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros


    limpiarMensajes();

    //  Validar Nombre  s    
    if (txtNombres.value === '') {
        resultado = false;
        Mensaje("Debe Llenar este campo",txtNombres);    
    }else if(!letra.test(txtNombres.value)){
        resultado = false;
        Mensaje("Solo letras", txtNombres);
    }
    //  Validar Apellidos
    if (txtApellidos.value === '') {
        resultado = false;
        Mensaje("Debe Llenar este campo",txtApellidos);    
    }else if(!letra.test(txtApellidos.value)){
        resultado = false;
        Mensaje("Solo letras", txtApellidos);
    }

    // Validar Telefono
    if (txtTelefono.value === "") {
        resultado = false;
        Mensaje("Telefono es requerido", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        resultado = false;
        Mensaje("Telefono debe ser de 10 digitos", txtTelefono);
    }

    //  Validar Asunto
    if (txtAsunto.value === '') {
        resultado = false;
        Mensaje("Debe Llenar este campo",txtAsunto);    
    }

    //  Validar Mensaje
    if (txtMensaje.value === '') {
    resultado = false;
    Mensaje("Debe Llenar este campo",txtMensaje);    
    }
    //Validar comboBox
    if (selectSucur.value === null || selectSucur.value === '0') {
        resultado = false;
        Mensaje("Debe seleccionar una sucursal", selectSucur);
    }
    
    //  Validar E-mail
    if (txtEmail.value === "") {
        resultado = false;
        Mensaje("Email es requerido", txtEmail);
    } else if (!correo.test(txtEmail.value)) {
        resultado = false;
        Mensaje("Email no es correcto", txtEmail);
    }


    //Validar checkbox genero
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
            let res=radiosGenero[i].value;
            
            break;
        }
    }
    if (!sel) {
        resultado = false;
        Mensaje("Debe seleccionar un genero", radiosGenero[0]);
    }


    if(!resultado){
        event.preventDefault();  // detener el evento  //stop form from submitting
    }
}

function Mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.setAttribute("class", "mensajeError"); 
    nodoMensaje.textContent = cadenaMensaje; 
    nodoMensaje.style.color = "red";
    nodoMensaje.style.fontSize = "12px";
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}
