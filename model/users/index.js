/**
 * Dobla API
 *
 * Archivo:     model/users/index.js
 * Descripción: Manejador de modelos users
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 24 - 2019
 */

'use strict'

/**
 * Declaración de modelos
 */
let users = {
    foundation_user: require('./foundation_user'),
    terms_condition: require('./terms_condition')
};

// Exportación de modelos
module.exports = users