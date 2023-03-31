const fs = require('fs');

//leer un archivo
/* fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if(err){
    throw err;
  }
  console.log(contenido);
}); */

//renombrar el nombre de un archivo
/* fs.rename('index.html', 'main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Nombre cambiado exitosamente');
}) */

//agregar contenido al final de un archivo
/* fs.appendFile('index.html', '<p>agrego al final</p>', (err) => {
  if(err)
    throw err;
  console.log("archivo actualizado");
}) */

//reemplazar todo el contenido del archivo
/* fs.writeFile('index.html', 'Contenido nuevo', (err)=> {
  if(err)
    throw err;
    console.log('reemplazo de contenido')
}) */

//elminar archivos sincronicamente
fs.unlinkSync('index.html')