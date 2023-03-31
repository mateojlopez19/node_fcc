function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freecodecamp`)
    setTimeout(() => {
      if(producto === 'taza'){
        resolve('ordenando una taza con logo');
      }else{
        reject('Este producto no esta disponible actualmente');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) { 
  return new Promise((resolve, reject) => {
    console.log('procesando respuesta');
    console.log(`La respueta fue: ${respuesta}`)
    setTimeout(() => {
      resolve('Gracias por  tu compra. disfruta tu producto');
    }, 4000);
  });
}

/* ordenarProducto('taza')
  .then(respuesta => {
    console.log('respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada)
  })
  .catch(error => {
    console.log(error);
  }) */


async function realizarPedido(producto){
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  } 
}

realizarPedido('taza');