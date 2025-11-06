import { Personaje } from "./personaje.js";

export class Casa {

    #nombre;
    #lema;
    #miembros;

    constructor(nombre = "", lema = "") {
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = [];
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getLema() {
        return this.#lema;
    }

    set setLema(lema) {
        this.#lema = lema;
    }

    agregarMiembro(personaje) {
        if(personaje instanceof Personaje){
            this.#miembros.push(personaje);
            console.log(`${personaje.getNombre} ha sido añadido/a a la ${this.#nombre}`);
            personaje.setCasa = this;
        }
    }

    listarMiembros() {
        console.log(`Miembros de la ${this.#nombre}`);
        this.#miembros.forEach(miembro => {
            console.log(`- ${miembro.getNombre}`);
        });
    }

}