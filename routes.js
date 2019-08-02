/**
 * Dobla API
 *
 * Archivo:     routes.js
 * Descripción: Rutas de peticiones
 * Autor:       Alvaro@Joonik
 * Creado:      Abr 22 - 2019
 */

"use strict";

// Variable de rutas
const routesHttpsRequests = [

    // --Peticíon para archivos publicos --//
    "./controller/http-public",

    // -- Peticiones de app -- //

    // GET appListFoundations - datos de todas las fundaciones
    "./controller/app/foundation/appListFoundations",
    // POST appSupportedFoundation - registro de email y fundacion favorita
    "./controller/app/foundation/appSupportedFoundation",
    // GET appFoundationUser - datos de email y fundacion favorita por id de usuario
    "./controller/app/users/appFoundationUser",
    // GET appTermsCondition - termionos y condiciones
    "./controller/app/users/appTermsCondition",
    // GET appListMenssages - lista de mensajes por id de fundacion
    "./controller/app/foundation/appListMessages"

].map(require);

// Exportar rutas
module.exports = routesHttpsRequests;