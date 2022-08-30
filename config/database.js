//useUnifiedTopology
//useNewUrlParser


const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_CONNECTION,{
        useUnifiedTopology: true,// habilita a mongose a controlar la base de datos de mongo
        useNewUrlParser: true// utiliza el analizador de erroeres de mongose en vez de el del mongo
    }

    //primer parametro:link de conection
    //segundo parametro: objeto con dos propiedades en true
)
.then(()=>console.log('connected to database succesfully'))//aviso que se conecto por un console
.catch(error=>console.log(error))// si no se pudo conectar: le hago console.log al "error"

//una vez configurada la conexion: requiero