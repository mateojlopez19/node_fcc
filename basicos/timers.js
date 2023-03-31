/* function sumar(a, b){
    console.log(a+b);
}
setTimeout(sumar, 3000, 5, 6); */

/* function mostrarTema(tema){
    console.log('estoy estudiando ' + tema)
}
console.log('antes de setImmediate');
setImmediate(mostrarTema, 'Node.js');
console.log('despues de setImmediate'); */ 

function sumar(a, b){
    console.log(a+b)
}
setInterval(sumar, 3000, 3, 4);

