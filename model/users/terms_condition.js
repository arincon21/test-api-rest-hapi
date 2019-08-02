/**
 * Dobla API
 *
 * Archivo:     model/users/terms_condition.js
 * Descripción: Obtiene los terminos y condiciones 
 * Autor:       Alvaro@Joonik
 * Creado:      May 08 - 2019
 */

'use strict'

// Conexión Mysql
const dataBase = require('../../connection_database')

/**
 * Método para obtener los datos de los terminos y condiciones
 * @return {Promise}    Resuelve obj con resultado del query
 */
module.exports = () => {
    const terms_condition = new Promise(function(resolve, reject) {

        const querySql = `SELECT 
                            id, 
                            url_pdf, 
                            version, 
                            dateRegistration, 
                            dateUpdate, 
                            status 
                        FROM 
                            terms_condition 
                        WHERE status = 1 LIMIT 1`

        dataBase.query(querySql, function(error, results) {
            if (!error) {
                resolve(results[0])
            } else {
                reject("appTermsCondition: " + error)
            }
        })
    })
    return terms_condition
}