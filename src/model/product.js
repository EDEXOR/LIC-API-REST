/**
 * Ejemplo de Node.js | Lista de productos
 */

var mongoose = require('../connection/connection');

var Schema = mongoose.Schema;
var Product = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    price: { type: Number},
    modified: { type: Date, default: Date.now }
});

var ProductModel = mongoose.model('Product', Product);

module.exports = ProductModel;