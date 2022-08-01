//Javascript asincrono nos permite ejecutar tareas simultaneamnete
//Hay 3 técnicas: 1) async/await, 2)promises, 3) callbacks

//CALLBACK: es una funcion dentro de otra funcion
//Callbacks sincronos => esos son bloqueadores | Callbacks asincronos => lo ejecutan los navegadores a través de APIs

//Ej. callback sincrono
// const generaNumero = () => {
//   return Math.floor(Math.random() * 10);
// };

// const imprimeNumero = (callback) => {
//   let numero = callback();
//   console.log(numero);
// };

// imprimeNumero(generaNumero);

//Ej. callback asincrono: se ejecutan cuando algo pasa, como un addEventListener de click por ejemplo
// const bajaVideo = (url, callback) => {
//   console.log(`Bajando video de... ${url}`);
//   setTimeout(() => {
//     console.log(`Video de ${url} descargado`);
//     callback(url);
//   }, 2000);
// };

// const procesaVideo = (url) => {
//   console.log(`Procesando video de ${url}`);
// };

// let url = "https://google.com";
// bajaVideo(url, procesaVideo);

//PROMISES: son objetos que representan el resultado eventual de una operacion asincrona
//Puede tener 3 estados:
//      a) pending: la promesa todavía no se ejecutó
//      b) resolve: la promesa se cumplió
//      c) reject: la promesa no se cumplió

//Ej.
// let teHasPortadoBien = true;

// const siMePortBien = new Promise((resolve, reject) => {
//   if (teHasPortadoBien) {
//     const telefono = {
//       modelo: "iPhone12",
//       capacidad: "128GB",
//       color: "rojo",
//     };
//     resolve(telefono);
//   } else {
//     reject("te has portado mal");
//   }
// });

// const promesaCumplida = (resolvedValue) => {
//   console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
// };

// const promesaRota = (rejectedValue) => {
//   console.log(`No te compro nada porque ${rejectedValue}`);
// };

// //siMePortBien.then(promesaCumplida, promesaRota); //forma de resolver el promise poco intuitivo

// const pideRegalo = () => {
//   siMePortBien.then(promesaCumplida).catch(promesaRota);
// };

// pideRegalo();

//Chaining de promises
// let teHasPortadoBien = true;
// let comportamiento = true;

// const chequeaComportamiento = (comportamiento) => {
//   return new Promise((resolve, reject) => {
//     if (teHasPortadoBien) {
//       const telefono = {
//         modelo: "iPhone12",
//         capacidad: "128GB",
//         color: "rojo",
//       };
//       resolve(telefono);
//     } else {
//       reject("te has portado mal");
//     }
//   });
// };

// const grabaVideo = (telefono) => {
//   const mensaje = `Grabo video para TikTok con mi ${telefono.modelo} nuevo`;
//   return Promise.resolve(mensaje);
// };

// chequeaComportamiento(comportamiento)
//   .then((resolvedValue) => {
//     return grabaVideo(resolvedValue);
//   })
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//   })
//   .catch((errorMensaje) => {
//     console.log(errorMensaje);
//   });

//Promise.all: se usa cuando el orden de las promesas no importa
// Toma como argumento un array de promesas y retorna UNA SOLA promesas
// si hay una promesa que no se cumple, Promise.all se rechaza con la razon especificada
// si todas las promesas se cumplen, Promise.all se resuelve con un array que contiene los valores especificados en resolve de cada promesa

// const chequeaComportamiento = (comportamiento) => {
//   return new Promise((resolve, reject) => {
//     if (comportamiento) {
//       const telefono = {
//         modelo: "iPhone12",
//         capacidad: "128GB",
//         color: "rojo",
//       };
//       resolve(telefono);
//     } else {
//       reject("te has portado mal");
//     }
//   });
// };

// const chequeaCalificacion = (calificacion) => {
//   return new Promise((resolve, reject) => {
//     if (calificacion > 85) {
//       resolve("Buen trabajo");
//     } else {
//       reject("Tienes que estudiar más");
//     }
//   });
// };

// const mePorteBien = chequeaComportamiento(true);
// const estudieBien = chequeaCalificacion(89);

// const promesas = [mePorteBien, estudieBien];

// Promise.all(promesas)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//ASYNC AWAIT: sirve para trabajar más fácil con promises
const chequeaComportamiento = (comportamiento) => {
  return new Promise((resolve, reject) => {
    if (comportamiento) {
      const telefono = {
        modelo: "iPhone12",
        capacidad: "128GB",
        color: "rojo",
      };
      resolve(telefono);
    } else {
      reject("te has portado mal");
    }
  });
};

const chequeaCalificacion = (calificacion) => {
  return new Promise((resolve, reject) => {
    if (calificacion > 85) {
      resolve("Buen trabajo");
    } else {
      reject("Tienes que estudiar más");
    }
  });
};

const pideTelefonoNuevo = async (comportamiento, calificacion) => {
  try {
    const promesas = await Promise.all([
      chequeaComportamiento(comportamiento),
      chequeaCalificacion(calificacion),
    ]);
    console.log(promesas);
  } catch (error) {
    console.log(error);
  }
};

pideTelefonoNuevo(true, 100);
