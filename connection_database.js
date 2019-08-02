/**
 * Dobla API
 *
 * Archivo:     connection_database.js
 * Descripción: Archivo de conexión MySQL
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

// Libreria
const mysql = require('mysql')

/**
 * Método de conexión
 */
const dataBase = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dobla',
    port: 8889
});


dataBase.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Se cerró la conexión de la base de datos.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene demasiadas conexiones.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión de la base de datos fue rechazada.')
        }
    }
    if (connection) {
        console.log('Conectado a base de datos')
        connection.release()
    }
    return
})



// Se exporta conexión
module.exports = dataBase