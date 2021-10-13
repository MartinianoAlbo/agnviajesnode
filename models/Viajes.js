import Sequelize from 'sequelize'
import db from '../config/db.js' 

export const Viaje = db.define('viajes', { 
    //el nombre de la tabla que tenesmos en db

    //Aqui nombramos todas las columnas de la tabla que tenemos con su typo de archivo
    //si no nombramos una no la traera desde la base
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
    
})