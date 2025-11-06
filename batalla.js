import { Casa } from "./casa";

export class Batalla {

    #guerreros;

    constructor() {
        this.#guerreros = [];
    }

    iniciarBatalla(casaA, casaB) {
        if (casaA instanceof Casa && casaB instanceof Casa) {
            casaA.getMiembros.forEach(personaje => {
                if(personaje instanceof Guerrero){
                    this.#guerreros.push(personaje);
                }
            });
            casaB.getMiembros.forEach(personaje => {
                if(personaje instanceof Guerrero){
                    this.#guerreros.push(personaje);
                }
            });
        }
    }

    mostrarGuerrerosMuertosEnCombate() {

    }

}