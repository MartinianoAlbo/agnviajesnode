import { Viaje } from '../models/Viajes.js'
import { Testimonial } from '../models/testimoniales.js'
import db from '../config/db.js'


const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo viaje  
    //crear un promise para ejecutar testimoniales y viajes al mismo tiempo
    //por que de lo contrario uno bloqua al otro

    const promiseDb = []

    promiseDb.push( Viaje.findAll({ limit: 3 }) )
    promiseDb.push( Testimonial.findAll({ limit: 3 }) )

    try {
        const resultado = await Promise.all(promiseDb)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
        
    } catch (error) {
        console.log(error)
    }

   
}

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //Consultar DB
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll()

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })

    } catch (error) {
        console.log(errores)
    }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params

    try {
        const viaje = await Viaje.findOne({ where: { slug } })//findOne trae un objeto

        res.render('viajeDetalle', {
            pagina: 'Informacion del Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

const otraVista = async (req, res) => {
    res.render('otraVista', {
        pagina: 'Otra vista'
    })
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
    otraVista
}