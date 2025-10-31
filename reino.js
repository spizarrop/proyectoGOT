import { Casa } from "./casa.js";

export class Reino {

    #nombre;
    #casas;
    #rey;

    constructor(nombre = "") {
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = [];
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getRey() {
        return this.#rey;
    }

    set setRey(rey) {
        this.#rey = rey;
    }

    agregarCasa(casa) {
        if(casa instanceof Casa){
            this.#casas.push(casa);
            console.log(`La ${casa.getNombre} ha sido añadida al ${this.#nombre}.`);
        }
    }

    listarCasas() {
        return this.#casas;
    }

    mostrarRey() {
        return this.#rey;
    }

}