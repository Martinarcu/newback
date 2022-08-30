const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    place: {type:String, required:true},
    price: {type:Number, required:true},
})

const Cities = mongoose.model(
    "cities",
    schema
    //nombre de la conexion
    //esquema de datos
)

module.exports = Cities