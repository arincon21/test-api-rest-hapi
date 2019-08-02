/**
 * Dobla API
 *
 * Archivo:     model/foundation/list_foundation.js
 * Descripción: Registra correo y fundacion favorita
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 23 - 2019
 */

'use strict'

// Conexión Mysql
const dataBase = require('../../connection_database')

/**
 * Promesa que resuelve si existe correo y retornar id
 */
const select_idUser = param => new Promise((resolve, reject) => {

    let querySql = `SELECT id FROM users WHERE email = '${param.email}'`

    dataBase.query(querySql, function(error, results) {
        if (!error) {
            if (results.length > 0) {
                resolve(results[0].id)
            } else {
                querySql = `INSERT INTO users (email) VALUES ('${param.email}')`
                dataBase.query(querySql, function(error, results) {
                    if (!error) {
                        resolve(results.insertId)
                    } else {
                        reject("appSupportedFoundation1: " + error)
                    }
                })
            }
        } else {
            reject("appSupportedFoundation2: " + error)
        }
    })
})

/**
 * Promesa que resuelve registro de terminos y condiciones
 */
const insert_terms = (idUser, param) => new Promise((resolve, reject) => {

    let querySql = `INSERT INTO terms_accepted (idUser, idTerms) VALUES ('${idUser}', '${param.idTerms}')`

    dataBase.query(querySql, function(error, results) {
        if (!error) {
            resolve(param.idTerms)
        } else {
            reject("appSupportedFoundation3: " + error)
        }
    })
})

/**
 * Promesa que resuelve el registro de la fundacion favorita por correo
 */
const support_foundation = (idUser, idTerms, param) => new Promise(function(resolve, reject) {

    let querySql = `INSERT INTO foundation_supported (
                        idUsers,
                        idFoundations,
                        textSupport)
                    VALUES (
                        '${idUser}',
                        '${param.idFoundations}',
                        '${param.textSupport}')`

    dataBase.query(querySql, function(error, results) {
        if (!error) {
            resolve({
                results: true,
                idUser: idUser,
                idMessage: results.insertId,
                idTerms: idTerms
            })
        } else {
            reject("appSupportedFoundation4: " + error)
        }
    })

})

/**
 * Método principal registro y fundacion favorita
 * retorna promesa
 */
module.exports = async param => {

    try {
        const idUser = await select_idUser(param)
        const idTerms = await insert_terms(idUser, param)

        return support_foundation(idUser, idTerms, param)

    } catch (error) {
        const err = { error: error }
        return err
    }
}
