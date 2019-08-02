/**
 * Dobla API
 *
 * Archivo:     controller/app/foundation/appSupportedFoundation.js
 * Descripción: Archivo principal de la petición appSupportedFoundation
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 23 - 2019
 */

'use strict'

// Modelo
const foundation = require('../../../model/foundation')

// Manejador de la petición
module.exports = {

    method: 'POST',
    path: '/appSupportedFoundation',
    handler: async(req, res) => {

        // Validación de campos 
        if (!req.payload.email || !req.payload.idFoundations) {
            return res.response({ error: "appSupportedFoundation: Faltan parametros" }).type('application/json')
        }

        try {
            let result = await foundation.supported_foundation(req.payload)
            return res.response(result).type('application/json')
        } catch (error) {
            return res.response({ error: error }).type('application/json')
        }
    }
}