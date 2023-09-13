// Javascript 

// alert("Bienvenidxs al sitio web Sustentabilidad Ambiental");

// function nombre() {
//     let nombre = prompt("Nombre y apellido");
  
//     if (nombre !== null) {
//       console.log("Tu nombre es: " + nombre);
//     } else {
//       console.log ("El/la usuario/a canceló la operación.");
//     }
//   }
  
//   nombre();

// Mostrar un mensaje de bienvenida
alert("Ayudanos a comprobar que no sos un robot");

// Función para obtener el nombre del usuario
function obtenerNombreUsuario() {
  let nombre = prompt("Por favor, ingresa tu nombre y apellido");

  if (nombre !== null) {
    nombre = nombre.trim(); // Solo llamamos a trim si nombre no es null
    if (nombre !== "") {
      alert("Bienvenidx " + nombre + " al sitio web Sustentabilidad Ambiental. Esperamos que el contenido sea de tu agrado.");
    } else {
      console.log("No se ingresó dato");
    }
  } else {
    console.log("El/la usuario/a canceló la operación.");
  }
}

// Llamar a la función para obtener el nombre
obtenerNombreUsuario();