const express = require('express');
const routerMatematicas = express.Router();


//middleware
routerMatematicas.use(express.json());

const {matematicas} = require('../datos/cursos.js').infoCursos;

//routing matematicas
routerMatematicas.get('/', (req, res) => {
    res.send(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema)
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.send(resultados);
});

routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema} por nivel ${nivel}`);
    }

    res.send(resultados);
});

routerMatematicas.post('/', (req, res) => {
    let nuevoCurso = req.body;
    matematicas.push(nuevoCurso);
    res.send(matematicas);
})

routerMatematicas.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id
    
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas[indice] = cursoActualizado;
    }
    res.send(matematicas);
});

routerMatematicas.patch('/:id', (req, res) => {
    const infoNueva = req.body;
    const id = req.params.id
    
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAModificar = matematicas[indice];
        Object.assign(cursoAModificar, infoNueva);
    }

    res.send(matematicas);
});

routerMatematicas.delete('/:id', (req, res) => {
    const id = req.params.id
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas.splice(indice, 1)
    }

    res.send(matematicas);
});

module.exports = routerMatematicas;
