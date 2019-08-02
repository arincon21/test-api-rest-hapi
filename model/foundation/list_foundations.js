/**
 * Dobla API
 *
 * Archivo:     model/foundation/list_foundation.js
 * Descripción: Obtiene todos los datos de las fundaciones 
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

// Conexión Mysql
const dataBase = require('../../connection_database')

/**
 * Método para obtener datos por fundaciones 
 * @return {Promise}    Resuelve obj con resultado del query
 */
module.exports = () => {
    const list_foundations = new Promise(function(resolve, reject) {

        const querySql = `SELECT
                            id,
                            name,
                            id_fundacion,
                            description,
                            vision, mision,
                            location,
                            icon,
                            legalInformation,
                            objectivePopulation,
                            photo,
                            video,
                            dateRegistration,
                            dateUpdate,
                            status
                        FROM foundations
                        WHERE status = 1`

        dataBase.query(querySql, function(error, results) {
            if (!error) {
                results = results.map((item) => {
                    item.objectivePopulation = JSON.parse(item.objectivePopulation)
                    return item
                })
                resolve(results)
            } else {
                reject("appListFoundations: " + error)
            }
        })
    })
    return list_foundations
}