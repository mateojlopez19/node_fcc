const express = require('express');
const app = express();

//Routers
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//routing
app.get('/', (req, res) => {
    res.send(`Mi primer servidor.`);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el ${PUERTO}...`);
});
