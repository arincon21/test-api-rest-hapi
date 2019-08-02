/**
 * Dobla API
 *
 * Archivo:     controller/app/users/appFoundationUser.js
 * Descripción: Archivo principal de la petición appFoundationUser
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 24 - 2019
 */

'use strict'

// Modelo
const users = require('../../../model/users')

// Manejador de la petición
module.exports = {
    method: 'GET',
    path: '/appFoundationUser/{idUser}',
    handler: async(req, res) => {
        try {
            let result = await users.foundation_user(req.params.idUser)
            return res.response(result).type('application/json')
        } catch (error) {
            return res.response({ error: error }).type('application/json')
        }
    }
}