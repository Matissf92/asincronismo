//PRimero definimos los 3 estados .open, .onreadystatechange, .send
//Traemos la API en formato texto con el this.responseText
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const API = "https://rickandmortyapi.com/api/character/";
// const api = new XMLHttpRequest();
// api.open("GET", API, true);
// api.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let resultado = this.responseText;
//     console.log(resultado);
//   } else {
//     const error = new Error(`Error ${API}`);
//   }
// };
// api.send();

//Transformarmos el texto a .PARSE para ordenador los datos de la API
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const API = "https://rickandmortyapi.com/api/character/";
// const api = new XMLHttpRequest();
// api.open("GET", API, true);
// api.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let resultado = JSON.parse(this.responseText);
//     console.log(resultado.results[0].name);
//   } else {
//     const error = new Error(`Error ${API}`);
//   }
// };
// api.send();

//Metemos el request dentro de una funcion
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const API = "https://rickandmortyapi.com/api/character/";
// const funcion = (url) => {
//   const api = new XMLHttpRequest();
//   api.open("GET", url, true);
//   api.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let resultado = JSON.parse(this.responseText);
//       console.log(resultado.results[0].name);
//     } else {
//       const error = new Error(`Error ${API}`);
//     }
//   };
//   api.send();
// };

// funcion(API);

//Ahora generamos el callback
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

const funcion = (url, callback) => {
  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let resultado = JSON.parse(this.responseText);
      console.log(resultado.results[0].name);
      setTimeout(() => {
        callback();
      }, 3000);
      console.log(resultado.results[0].species);
    } else {
      const error = new Error(`Error ${API}`);
    }
  };
  api.send();
};

const funcionCallback = () => {
  console.log("Este es el callback");
};

funcion(API, funcionCallback);
