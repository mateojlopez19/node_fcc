const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    return estatus;
};

const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve('Pedido exitoso');
        }else{
            reject('Ocurrio un error');
        }
    }, 2000)
});

/* const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
}

const rechazarPedido = (mensajeError) => {
    console.log(mensajeError);
} */

//miPedidoPizza.then(manejarPedido, rechazarPedido);

/* miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .then(null, (mensajeError) => {
        console.log(mensajeError);
    }); */

miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeError) => {
        console.log(mensajeError);
    }); 