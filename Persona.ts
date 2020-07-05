export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;
    
    caminar(){
        console.log("Estoy caminando " + this.kilometros + " kilometros!");
    }
    
    constructor(cantKm: number){
        this.kilometros = cantKm;
        this.nombre = "Jonathan";
        this.apellido = "Yara";
        this.edad = 27;
    }    
}