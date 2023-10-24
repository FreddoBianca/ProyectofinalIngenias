// alert("Probando que se conecte al js")

// document.querySelector ("div.mensajejs") .innerHTML = '<p>Tu consulta esta siendo procesada en breve nos comunicaremos</p>'

// Validacion en formulario

let formulario = document.querySelector ("form.registro")
let inputnombre = document.getElementById("nombre")
inputnombre.addEventListener("keyup", () =>{
  let mensaje;
  if (inputnombre.value.length < 3) {
    mensaje = "El nombre debe tener más de tres caracteres"
    document.getElementById ("ValidarNombre") .innerText = mensaje;
    }
    else {
      document.getElementById ("ValidarNombre") .innerText = "  "

    }
})

let inputcomentarios = document.getElementById ("comentarios");
inputcomentarios.addEventListener ("keyup", () =>{
  let mensaje;
  if (inputcomentarios.value.length < 250) {
    mensaje = "El comentario debe tener hasta 250 caracteres"
    document.getElementById ("ValidarComentarios") .innerText = mensaje;
    } else {
      document.getElementById ("ValidarComentarios") .innerText = "  "
    }
  })

  let inputComentario = document.getElementById("comentarios")
inputComentario.addEventListener ("focus", () =>{
inputComentario.style.backgroundColor = "green"
})

let inputemail = document.getElementById("email")
inputemail.addEventListener("blur", () =>{
    if (inputemail.value == "") {
    inputemail.style.border = "2px solid red"
    }
    else {
      inputemail.style.border = "0"

    }
})

// Reproductor de musica

const audio = document.querySelector("audio");

    function play() {
      audio.play();
    }

    function pause() {
      audio.pause();
    }

    function next() {
      audio.currentTime += 10;
    }

    function prev() {
      audio.currentTime -= 10;
    }

    document.querySelector("#play").addEventListener("click", play);
    document.querySelector("#pause").addEventListener("click", pause);
    document.querySelector("#next").addEventListener("click", next);
    document.querySelector("#prev").addEventListener("click", prev);
  

    // Inicio de sesion

   window.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#botonSesion");
  
    if (boton) {
      boton.onclick = (event) => {
        event.preventDefault();
  
        const inputUsuario = document.getElementById("username").value;
        const inputContrasena = document.getElementById("password").value;
  
        if (inputUsuario && inputContrasena) {
          if (inputUsuario === localStorage.getItem("usuarioRegistrado")) {
            document.querySelector("#mensaje").innerText = "Ingreso con exito " + inputUsuario;
            sessionStorage.setItem("sesionIniciada", true);
            sessionStorage.setItem("username", inputUsuario);
            console.log(sessionStorage);
          } else {
            document.querySelector("#mensaje").innerText = "Intente de nuevo";
          }
        } else {
          document.querySelector("#mensaje").innerText = "Ingrese un nombre de usuario y una contraseña";
        }
      };
    } else {
      console.log("El elemento con el ID 'botonSesion' no existe");
    }
  });

  
    
  
  
  

// function validarDatos() {
//     // Obtenemos los datos del formulario / input
//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value;
//     let email = document.getElementById("email").value;
//     let telefono = document.getElementById("telefono").value;
//     let informacion = document.getElementById("información").value;
//     let comentarios = document.getElementById("comentario").value;
  
//     // Validamos los datos
//     if (nombre === "") {
//       alert("Ingresar un nombre.");
//       return false;
//     }
  
//     if (apellido === "") {
//       alert("Ingresar un apellido.");
//       return false;
//     }
  
//     if (!/\w+@\w+\.\w+/.test(email)) {
//       alert("El correo electrónico no es válido.");
//       return false;
//     }
  
//     if (!/\d{10}/.test(telefono)) {
//       alert("El número de teléfono no es válido.");
//       return false;
//     }
  
//     if (informacion === "") {
//       alert("Seleccionar una opción de información.");
//       return false;
//     }
//     if (comentarios === "") {
//       alert("Debes ingresar un comentario.");
//       return false;
//     }
  
//     // Creamos un objeto JSON con los datos
//     let datos = {
//       nombre: nombre,
//       apellido: apellido,
//       email: email,
//       telefono: telefono,
//       informacion: informacion,
//       comentarios: comentarios,
//     };
  
//     return true;
//   }
  
//   function almacenarDatos() {
//     // Validamos los datos
//     if (!validarDatos()) {
//       return;
//     }
  
//     // Almacenamos el objeto JSON en el Storage
//     localStorage.setItem("datos", JSON.stringify(datos));
  
//     // Mostramos un mensaje de éxito
//     alert("Los datos se han almacenado correctamente.");
//   }
  
//   // Evento de clic en el botón de enviar
//   document.querySelector("form").addEventListener("submit", almacenarDatos);
  
//   // Obtenemos los datos almacenados en el Storage
// let datos = localStorage.getItem("datos");

// // Convertimos los datos a un objeto JSON
// const usuario = JSON.parse(datos);
// console.log(datos);
  


