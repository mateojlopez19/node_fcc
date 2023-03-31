const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProducts) => {
  console.log(`se realizo una compra por ${total}`);
  console.log(`numero de productos ${numProducts}`);
});

emisorProductos.emit('compra', 500, 5);
