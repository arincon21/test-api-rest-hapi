/**
 * Dobla API
 *
 * Archivo:     model/foundation/index.js
 * Descripción: Manejador de modelos foundation
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

/**
 * Declaración del modelos
 */
let foundation = {
    list_foundations: require('./list_foundations'),
    supported_foundation: require('./supported_foundation'),
    list_messages: require('./list_messages')
};

// Exportación de modelos
module.exports = foundation