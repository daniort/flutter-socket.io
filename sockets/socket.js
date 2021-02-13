
const { io } = require('../index');

// Mensajes de Soket
io.on('connection', client => {
    console.log('Cliente Conectado :D');
    client.on('disconnect', () => {
        console.log('Cliente desconectado :C');
    });

    client.on('mensaje', ( payload ) => {
        console.log('val' + payload.nombre);
        io.emit('mensaje', {
            admin : 'Nuevo Mensaje!!!'
        } )
    });
    

});
