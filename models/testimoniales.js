import Sequelize from 'sequelize'
import db from '../config/db.js'

export const Testimonial = db.define('testimoniales', {
    //el nombre de la tabla que tenesmos en db

    //Aqui nombramos todas las columnas de la tabla que tenemos con su typo de archivo
    //si no nombramos una no la traera desde la base
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }

})