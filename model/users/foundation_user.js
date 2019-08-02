/**
 * Dobla API
 *
 * Archivo:     model/users/foundation_user.js
 * Descripción: Obtiene todos los datos del usuario y su fundacion favorita
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

// Conexión Mysql
const dataBase = require('../../connection_database')

/**
 * Método para obtener datos del usuario y su fundacion favoritas por id de usuario
 * @return {Promise}    Resuelve obj con resultado del query
 */
module.exports = (idUSer) => {
    const foundation_user = new Promise(function(resolve, reject) {

        const querySql = `SELECT
                            foundation_supported.idUsers AS userId,
                            users.email AS userEmail,
                            users.status AS userStatus,
                            users.dateRegistration AS userDateRegistration,
                            users.dateUpdate AS userDateUpdate,
                            foundations.name AS foundationsName,
                            foundation_supported.idFoundations AS foundationsId,
                            foundations.id_fundacion AS foundationsIdFoundation,
                            foundations.description AS foundationsDescription,
                            foundations.vision AS foundationsVision,
                            foundations.mision AS foundationsMision,
                            foundations.location AS foundationsLocation,
                            foundations.icon AS foundationsIcon,
                            foundations.legalInformation AS foundationsLegalInformation,
                            foundations.objectivePopulation AS foundationsObjetivePopulation,
                            foundations.photo AS foundationsPhoto,
                            foundations.video AS foundationsVideo,
                            foundations.dateRegistration AS foundationsDateRegistration,
                            foundations.dateUpdate AS foundationsDateUpdate,
                            foundations.status AS foundationsStatus,
                            foundation_supported.id AS supportedFoundationId,
                            foundation_supported.textSupport AS supportedFoundationTextSupport,
                            foundation_supported.status AS supportedFoundationStatus,
                            foundation_supported.dateRegistration AS supportedFoundationDateRegistration,
                            foundation_supported.dateUpdate AS supportedFoundationDateUpdate
                        FROM
                            foundation_supported
                            JOIN users ON foundation_supported.idUsers = users.id
                            JOIN foundations ON foundation_supported.idFoundations = foundations.id
                        WHERE
                            foundation_supported.idUsers = ${idUSer} AND
                            foundation_supported.status = 1
                        ORDER BY foundation_supported.dateRegistration DESC LIMIT 1`

        dataBase.query(querySql, function(error, results) {
            if (!error) {
                results = results.map((item) => {
                    item.foundationsObjetivePopulation = JSON.parse(item.foundationsObjetivePopulation)
                    return item
                })
                resolve(results)
            } else {
                reject("appFoundationUser: " + error)
            }
        })
    })
    return foundation_user
}
