import { Personaje } from "../personaje.js";
import { Rey } from "./rey.js";

export class Consejero extends Personaje {
    
    #especialidad;

    constructor(nombre, edad, especialidad = "") {
        super(nombre,edad);
        this.#especialidad = especialidad;
    }

    get getArma() {
        return this.#especialidad;
    }

    set setArma(especialidad) {
        this.#especialidad = especialidad;
    }

    luchar(){
        console.log(`${this.getNombre} no lucha con armas, sino con palabras e inteligencia.`);
    }

    aconsejar(rey){
        if (rey instanceof Rey) {
            console.log(`${this.getNombre} aconseja a ${rey.getNombre} sobre muchas temas.`);
        }
    }
}