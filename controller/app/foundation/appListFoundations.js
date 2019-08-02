/**
 * Dobla API
 *
 * Archivo:     controller/app/foundation/appListFoundations.js
 * Descripción: Archivo principal de la petición appListFoundations
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

// Modelo
const foundation = require('../../../model/foundation')

// Manejador de la petición
module.exports = {
    method: 'GET',
    path: '/appListFoundations',
    handler: async(req, res) => {
        try {
            let result = await foundation.list_foundations()
            return res.response(result).type('application/json')
        } catch (error) {
            return res.response({ error: error }).type('application/json')
        }
    }
}