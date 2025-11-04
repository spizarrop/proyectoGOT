import { Casa } from "./casa.js";
import { Personaje } from "./personaje.js";

export class Reino {

    #nombre;
    #casas;
    #rey;

    constructor(nombre = "") {
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = new Personaje;
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
        if (rey instanceof Personaje) {
            this.#rey = rey;
            console.log(`${rey.getNombre} ha sido proclamado rey del ${this.#nombre}`);
        }
    }

    agregarCasa(casa) {
        if (casa instanceof Casa) {
            this.#casas.push(casa);
            console.log(`La ${casa.getNombre} ha sido añadido/a a la ${this.#nombre}.`);
        }
    }

    listarCasas() {
        console.log(`Casas del ${this.#nombre}`);
        this.#casas.forEach(casa => {
            console.log(`- ${casa.getNombre}`);
        });
    }

    mostrarRey() {
        console.log(`El rey actual del ${this.#nombre} es ${this.#rey.getNombre} de la ${this.#rey.getCasa.getNombre}`);
    }

}