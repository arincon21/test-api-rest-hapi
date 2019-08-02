/**
 * Dobla API
 *
 * Archivo:     controller/app/users/appTermsCondition.js
 * Descripción: Archivo principal de la petición appTermsCondition
 * Autor:       Alvaro@Joonik
 * Creado:      May 08 - 2019
 */

'use strict'

// Modelo
const users = require('../../../model/users')

// Manejador de la petición
module.exports = {
    method: 'GET',
    path: '/appTermsCondition',
    handler: async(req, res) => {
        try {
            let result = await users.terms_condition()
            return res.response(result).type('application/json')
        } catch (error) {
            return res.response({ error: error }).type('application/json')
        }
    }
}