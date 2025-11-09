import { Casa } from "./casa.js";
//import { Arma } from "./arma.js";

export class Personaje {
    #nombre;
    #edad;
    #vivo;
    #casa;
    //#arma

    constructor(nombre = "", edad = null, vivo = true, casa = null) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = vivo;
        this.#casa = casa instanceof Casa ? casa : new Casa();
        //this.#arma = new Arma;
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getEdad() {
        return this.#edad;
    }

    set setEdad(edad) {
        this.#edad = edad;
    }

    get getVivo() {
        return this.#vivo;
    }

    set setVivo(vivo) {
        this.#vivo = vivo;
    }

    get getCasa() {
        return this.#casa;
    }

    set setCasa(casa) {
        if (casa instanceof Casa) {
            this.#casa = casa;
        }
    }

    /* get getArma() {
        return this.#arma;
    }

    set setArma(arma) {
        if (arma instanceof Arma) {
            this.#arma = arma;
        }
    } */

    presentarse() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa.getNombre}`);
    }

    morir() {
        this.#vivo = false;
        console.log(`${this.#nombre} ha muerto.`);
    }

}