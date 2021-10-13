import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
    otraVista
}
    from '../controllers/paginasController.js';
import {
    guardarTestimonial
}
    from '../controllers/testimonialController.js'
    
import { Testimonial } from "../models/testimoniales.js"


const router = express.Router()

//req- lo que enviamos : res- lo que express responde
//INICIO
router.get('', paginaInicio)

//NOSOTROS
router.get('/nosotros', paginaNosotros)

//VIAJES
router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)//comodines

//TESTIMONIALES
router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get('/otraVista', otraVista)


export default router