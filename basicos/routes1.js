const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
  const {method} = req;

  switch(method){
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501
      res.end(`El metodo usado no puede ser utilizado por el servidor: ${method}`);
  }
})

function manejarSolicitudGET(req, res){
  let path = req.url;

  if(path === '/'){
    res.end('Bienvenidos a mi primer servidor con node.js');
  }else if(path === '/cursos'){
    res.end(JSON.stringify(cursos.infoCursos));
  }else if(path === '/cursos/programacion'){ 
    res.end(JSON.stringify(cursos.infoCursos.programacion));
  }

  res.statusCode = 404;
  res.end('El recurso no existe');
}

function manejarSolicitudPOST(req, res){
  let path = req.url;

  if(path === '/cursos/programacion'){
    res.end('El servidor recibe una solicitud post');
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})