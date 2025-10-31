export class Personaje {
    #nombre;
    #edad;
    #vivo;
    #casa; /* se puede omitir y ver si esta en los miembros de una casa */
    #arma;

    constructor(nombre = "", edad = null, vivo = true) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = vivo;
        this.#casa = [];
        this.#arma = [];
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
        this.#casa = casa;
    }

    get getArma() {
        return this.#arma;
    }

    set setArma(arma) {
        this.#arma = arma;
    }

    presentarse() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa}`);
    }

    morir() {
        this.#vivo = false;
        console.log(`${this.#nombre} ha muerto.`);
    }

}