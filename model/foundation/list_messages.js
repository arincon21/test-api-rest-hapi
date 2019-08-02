/**
 * Dobla API
 *
 * Archivo:     model/foundation/list_messages.js
 * Descripción: Obtiene todos los mensajes por fundacion
 * Autor:       Alvaro@Joonik
 * Creado:      May 09 - 2019
 */

'use strict'

// Conexión Mysql
const dataBase = require('../../connection_database')

/**
 * Método para obtener todos los mensajes de la fundacion por su id
 * @return {Promise}    Resuelve obj con resultado del query
 */
module.exports = (idFoundation, limit) => {
    const list_messages = new Promise(function(resolve, reject) {

        const querySql = `SELECT
                            foundation_supported.id,
                            users.email,
                            foundation_supported.idFoundations AS foundationsId,
                            foundation_supported.textSupport,
                            foundation_supported.status,
                            foundation_supported.dateRegistration,
                            foundation_supported.dateUpdate
                        FROM
                            foundation_supported
                            JOIN users ON foundation_supported.idUsers = users.id
                        WHERE
                            foundation_supported.idFoundations = ${idFoundation} AND
                            foundation_supported.status = 1
                            foundation_supported.textSupport != ""
                        ORDER BY dateRegistration DESC
                        ${limit ? "LIMIT "+ limit : ""}`

        dataBase.query(querySql, function(error, results) {
            if (!error) {
                resolve(results)
            } else {
                reject("appListMessages: " + error)
            }
        })
    })
    return list_messages
}
