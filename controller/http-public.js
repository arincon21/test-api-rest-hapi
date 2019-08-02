/**
 * Dobla API
 *
 * Archivo:     controller/httpPublic.js
 * Descripción: Archivo principal de servidor de archivos publicos
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 24 - 2019
 */

'use strict'

// Manejador de la petición
module.exports = {
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './public',
            redirectToSlash: true
        }
    }
}