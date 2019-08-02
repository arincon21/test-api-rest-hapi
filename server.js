/**
 * Dobla API
 *
 * Archivo:     server.js
 * Descripción: Archivo principal
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

'use strict'

// Librerías
const Hapi = require('hapi')
const Inert = require('inert');

// Rutas de peticiones
const routes = require("./routes")

/**
 * Configuración
 */
const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
});

/**
 * Método para iniciar servidor
 */
const iniciarServer = async() => {
    try {
        await server.register(Inert);
        await server.route(routes);
        await server.start();
        console.log(`Servidor corriendo en: ${server.info.uri}`)
    } catch (error) {
        console.log(`Error al iniciar el servidor Hapi: ${error}`)
    }
};

//Iniciar servidor
iniciarServer()