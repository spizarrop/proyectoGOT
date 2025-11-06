import { Personaje } from "../personaje.js";

export class Rey extends Personaje {
    
    #aniosReinado;

    constructor(nombre, edad, aniosReinado = "") {
        super(nombre,edad);
        this.#aniosReinado = aniosReinado;
    }

    get getArma() {
        return this.#aniosReinado;
    }

    set setArma(aniosReinado) {
        this.#aniosReinado = aniosReinado;
    }

    luchar(){
        console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#aniosReinado} años.`);
    }

}