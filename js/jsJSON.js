// let jsonformUsuario =  `[
//     {
//       "nombre": "Bianca",
//       "apellido": "Freddo",
//       "email": "example@gmail.com",
//       "telefono": "12345678",
//       "comentario":"Me gusta java pero me costo más que html y css"
//     },
//     {
//       "nombre": "Lucia",
//       "apellido": "Vazquez",
//       "email": "example@gmail.com",
//       "telefono": "12345678",
//       "comentario":"Me gusta java pero me costo más que html y css"
//     },
//     {
//       "nombre": "Leonardo",
//       "apellido": "Perez",
//       "email": "example@gmail.com",
//       "telefono": "12345678",
//       "comentario":"Me gusta java pero me costo más que html y css"
//     },
//   ]`
  
//   let jsonConvertidoform = JSON.parse (jsonformUsuario)
//   console.log(jsonConvertidoform);
  

let jsonFormusuario = `[
    {
      "nombre": "bianca",
      "apellido": "freddo",
      "telefono": "12345678"
    },
    {
      "nombre": "pedro",
      "apellido": "perez",
      "telefono": "12345678"
    },
    {
      "nombre": "damian",
      "apellido": "flores",
      "telefono": "12345678"
    },
    {
      "nombre": "laura",
      "apellido": "vazquez",
      "telefono": "12345678"
    },
    {
      "nombre": "josefa",
      "apellido": "fatima",
      "telefono": "12345678"
    }
]`

let jsonConvertidoform = JSON.parse(jsonFormusuario)
console.log(jsonConvertidoform);