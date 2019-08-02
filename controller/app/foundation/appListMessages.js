/**
 * Dobla API
 *
 * Archivo:     controller/app/users/appFoundationUser.js
 * Descripción: Archivo principal de la petición appListMessages
 * Autor:       Alvaro@Joonik
 * Creado:      May 09 - 2019
 */

'use strict'

// Modelo
const foundation = require('../../../model/foundation')

// Manejador de la petición
module.exports = {
    method: 'GET',
    path: '/appListMessages/{idFoundation}/{limit?}',
    handler: async(req, res) => {
        try {
            let result = await foundation.list_messages(req.params.idFoundation, req.params.limit)
            return res.response(result).type('application/json')
        } catch (error) {
            return res.response({ error: error }).type('application/json')
        }
    }
}