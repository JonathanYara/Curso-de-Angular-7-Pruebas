"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cantKm) {
        this.kilometros = cantKm;
        this.nombre = "Jonathan";
        this.apellido = "Yara";
        this.edad = 27;
    }
    Persona.prototype.caminar = function () {
        console.log("Estoy caminando " + this.kilometros + " kilometros!");
    };
    return Persona;
}());
exports.Persona = Persona;
