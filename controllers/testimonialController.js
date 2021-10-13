import { Testimonial } from "../models/testimoniales.js"

const guardarTestimonial =  async (req,res) => {

    //validar
    const { nombre, correo, mensaje } = req.body

    const errores = []


    if(nombre.trim() === ''){ // trim quita los espacios en blanco al inicio y al final
        errores.push({ mensaje: 'El nombre esta vacio'})
    }
    if (correo.trim() === '') { 
        errores.push({ mensaje: 'El correo esta vacio' })
    }
    if (mensaje.trim() === '') { 
        errores.push({ mensaje: 'El mensaje esta vacio' })
    }

    if(errores.length > 0) {

        //Consultar los testimoniales existentes
        const testimoniales = await Testimonial.findAll()

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,//para mentener el valor previo en el formulario
            mensaje,
            testimoniales

        })
    }else{
        //Almacenar base de datos   
        try {

           await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')

        } catch (error) {
            console.log(error)
        }

    }
   
}

export {
    guardarTestimonial
}
