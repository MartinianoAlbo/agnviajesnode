import express from 'express'
import router from './routes/index.js';
import db from './config/db.js'
import Dotenv from 'dotenv'

//app.use responde a todos los verbos: get , put , etc...
//req: lo que le estoy enviando al servidor
//res: lo que el servidor me responde
//next: cuando termina avanza al siguente middleware con la sintaxis next()

const app = express()

//Conectar base de datos
try {
     db.authenticate()
        .then(() => console.log('Base de datos conectada'))
} catch (error) {
    console.log('Error al conectarse a la Base de datos', error)
}


//Lineas de Middleware: 

//Habilitar PUG
app.set('view engine', 'pug')


//Obtener el año actual
app.use( (req, res, next) => { //next - avanza al siguiete middleware
    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de Viajes"

    next()
})

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))


//Definir la carpeta Publica
app.use(express.static('public'))

//Agregar router
app.use('', router)

//Definir Puerto
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port, host, () => {
    console.log(`SERVIDOR OK`)
})