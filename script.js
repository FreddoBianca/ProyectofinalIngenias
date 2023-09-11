// Javascript 

alert("Bienvenidxs al sitio web Sustentabilidad Ambiental");

function nombre() {
    let nombre = prompt("¿Cómo te llamas?");
  
    if (nombre !== null) {
      console.log("Tu nombre es: " + nombre);
    } else {
      console.log("El usuario canceló la operación.");
    }
  }
  
  nombre();