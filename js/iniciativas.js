let proyectos = `[
    {
      "proyecto": "Tu huella ecológica, $2500,00",
      "autora": "Luisa",
      "contacto": "12345678",
      "imagen": "https://previews.123rf.com/images/jovanas/jovanas1607/jovanas160700084/59603945-grupo-de-tres-mujeres-iconos-fij%C3%B3-con-larga-sombra.jpg"
    },
    {
      "proyecto": "Esperamos el impacto, $3500,00",
      "autora": "Vanesa",
      "contacto": "12345678",
      "imagen": "https://media.istockphoto.com/id/1001310714/es/vector/mujer-se%C3%B1alando-con.jpg?s=170667a&w=0&k=20&c=ehqZXFKCWkVQ06h0HaeJXUIqVAjFbsWD2agn3FJbzGM="
    },
    {
      "proyecto": "Nos importa el ambiente, $4000,00",
      "autora": "Lucia",
      "contacto": "12345678",
      "imagen": "https://media.istockphoto.com/id/1362447090/es/vector/una-maestra-que-recibe-ideas-de-pie-con-un-gesto-de-la-mano-que-se%C3%B1ala.jpg?s=612x612&w=0&k=20&c=ehd-Yj_46QTkYSHC-e1CA8HJmZEBZzFstax8himEluU="
    },
    {
      "proyecto": "El planeta nos necesita, $5000,00",
      "autora": "Carmen",
      "contacto": "12345678",
      "imagen": "https://us.123rf.com/450wm/kuklamalvina/kuklamalvina2302/kuklamalvina230200048/199288950-woman-writing-in-notebook-journalist-author-student-business-woman-taking-notes-with-pen-education.jpg?ver=6"
    }
]`

window.onload = () => {
let jsonConvertido = JSON.parse (proyectos)
console.log(jsonConvertido);

// recorrer el arrayjsonConvertido
for (let i = 0; i < jsonConvertido.length; i++) {

    // crear un articulo
    let article = document.createElement ("article")

    // crear h2
    let h2 = document.createElement("h2")
    h2.innerText = jsonConvertido[i].proyecto
    

    // crear imagen
    let img = document.createElement("img")
    img.src = jsonConvertido[i]. imagen
    img.style.width ="35%"
    // crear un p 
    let p = document.createElement("p")
    p.innerText = jsonConvertido [i].autora
   

    // crear boton
    let boton = document.createElement("button")
    boton.className = "botoncarrito"
    boton.innerText = "Agregar al carrito"

    //terminar de armar el article
    article.appendChild(h2)
    article.appendChild(img)
    article.appendChild(p)
    article.appendChild(boton)

     //mandar el article a la seccion
     document.getElementById("Proyectos").appendChild(article)
     
    }

 
    // window.onload = () => {
      let botones = document.querySelectorAll(".botoncarrito");
      for (let i = 0; i < botones.length; i++)
          botones[i].addEventListener("click", () => {
              localStorage.setItem("proyectoProyecto", jsonConvertido[i].proyecto)
              localStorage.setItem("proyectoAutora", jsonConvertido[i].autora)
              localStorage.setItem("proyectoContacto", jsonConvertido[i].contacto)
              localStorage.setItem("proyectoImagen", jsonConvertido[i].imagen)

                           
              let article2 = document.createElement("article2")
  
              // Crear h2
              let h2 = document.createElement("h2")
              h2.innerText = localStorage.getItem("proyectoProyecto")
              article2.appendChild(h2);
  
              // Crear p
              let p = document.createElement("p")
              p.innerText = localStorage.getItem("proyectoAutora")
              article2.appendChild(p)
  
              // Crear img
              // let img = document.createElement("img");
              // img.src = localStorage.getItem("proyectosImagen");
              // img.style.width = "40%";
              // article2.appendChild(img);
  
              document.getElementById("Carrito").appendChild(article2)
          });
      };

  // Función para vaciar el carrito
function vaciarCarrito() {
  // Eliminamos todos los productos del carrito
  const productos = document.querySelectorAll("article2");
  for (let i = 0; i < productos.length; i++) {
    productos[i].remove();
  }
}

// Evento para el botón de vaciar carrito
document.querySelector("#vaciar").addEventListener("click", vaciarCarrito);








  









  