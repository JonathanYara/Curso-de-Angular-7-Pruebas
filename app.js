"use strict";
/*let nombre: string = "Jonathan Yara";
let edad: number = 27;
let sentence = `Hola, mi nombre es ${ nombre } y mi edad es ${ edad }.`;

console.log(sentence);
alert(sentence);


function pruebadeCursoAngular(param1: string, param2: string = "Hola mundo", param3? : string){
    console.log("Cadena 1 -> " + param1);
    console.log("Cadena 2 -> " + param2);
    console.log("Cadena 3 -> " + param3);
}

pruebadeCursoAngular("Diego");
pruebadeCursoAngular("Diego", "Herrera", "Es feliz");

var sumarNum = function(param1: number, param2: number){ return param1 + param2; };
let result = sumarNum(100, 200);
console.log(result);

var sumarNum2 = (param1: number, param2: number) => { return param1 + param2; };
let result2 = sumarNum2(100, 300);
console.log(result2);


let mipromesa = new Promise(function(resolve: any, reject: any){
    //resolve();
    reject();
});
    
mipromesa.then(function(){
    console.log("La operación ha finalizado con éxito");
}, function(){
    console.log("La operación ha finalizado con error");
});*/
exports.__esModule = true;
var Persona_1 = require("./Persona");
var objPersona = new Persona_1.Persona(500);
objPersona.caminar();
console.log("prueba.");
