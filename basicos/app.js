const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola freecodecamp')
})

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO} `)
})

