/**
 * Ejemplo de Node.js | Lista de productos
 */
var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb://localhost/restapi_database');

mongoose.connection.on('connected', function (ref) {
    connected=true;
    console.log('connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
    connected=false;
    console.log('error connection to mongo server!');
    console.log(err);
});

module.exports = conn;