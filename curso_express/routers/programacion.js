const express = require('express');
const routerProgramacion = express.Router();

//middleware
routerProgramacion.use(express.json());

const {programacion} = require('../datos/cursos').infoCursos;

//routing programacion
routerProgramacion.get('/', (req, res) => {
    res.send(programacion);
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if(resultados.length === 0){
        return res.status(204).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas'){
        return res.send((resultados.sort((a, b) => a.vistas - b.vistas)))
    }

    res.send(resultados);
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(resultados);
});

routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(programacion);
});

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id
    
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    res.send(programacion);
});

routerProgramacion.patch('/:id', (req, res) => {
    const infoNueva = req.body;
    const id = req.params.id
    
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoNueva);
    }

    res.send(programacion);
});

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice, 1)
    }

    res.send(programacion);
});



module.exports = routerProgramacion;

