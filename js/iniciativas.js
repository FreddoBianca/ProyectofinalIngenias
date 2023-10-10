let proyectos = `[
    {
      "proyecto": "Tu huella ecologica es tu impronta",
      "autora": "Luisa",
      "contacto": "12345678",
      "imagen": "https://st3.depositphotos.com/17418852/32153/v/450/depositphotos_321539600-stock-illustration-trendy-young-woman-presenting-hand.jpg"
    },
    {
      "proyecto": "Esperamos el impacto",
      "autora": "Vanesa",
      "contacto": "12345678",
      "imagen": "https://media.istockphoto.com/id/1001310714/es/vector/mujer-se%C3%B1alando-con.jpg?s=170667a&w=0&k=20&c=ehqZXFKCWkVQ06h0HaeJXUIqVAjFbsWD2agn3FJbzGM="
    },
    {
      "proyecto": "Nos importa el ambiente",
      "autora": "Lucia",
      "contacto": "12345678",
      "imagen": "https://media.istockphoto.com/id/1362447090/es/vector/una-maestra-que-recibe-ideas-de-pie-con-un-gesto-de-la-mano-que-se%C3%B1ala.jpg?s=612x612&w=0&k=20&c=ehd-Yj_46QTkYSHC-e1CA8HJmZEBZzFstax8himEluU="
    },
    {
      "proyecto": "El planeta nos necesita",
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
    img.style.width ="40%"
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

  









  