import { Casa } from "./casa";

export class Batalla {

    #guerrerosCasaA;
    #guerrerosCasaB;
    #guerrerosMuertos;

    constructor() {
        this.#guerrerosCasaA = [];
        this.#guerrerosCasaB = [];
        this.#guerrerosMuertos = [];
    }

    iniciarBatalla(casaA, casaB) {
        if (casaA instanceof Casa && casaB instanceof Casa) {
            casaA.getMiembros.forEach(personaje => {
                if(personaje instanceof Guerrero){
                    this.#guerrerosCasaA.push(personaje);
                }
            });
            casaB.getMiembros.forEach(personaje => {
                if(personaje instanceof Guerrero){
                    this.#guerrerosCasaB.push(personaje);
                }
            });
        }

        let numGuerreros = (this.#guerrerosCasaA.length > this.#guerrerosCasaB.length) ? this.#guerrerosCasaA.length : this.#guerrerosCasaB.length;

        for (let i = 0; i < numGuerreros; i++) {
            this.#guerrerosCasaA[i].atacar(this.#guerrerosCasaB[i]);
            this.#guerrerosCasaB[i].atacar(this.#guerrerosCasaA[i]);
        }

    }

    mostrarGuerrerosMuertosEnCombate() {
        this.#guerrerosCasaA.forEach(guerrero => {
            if(guerrero.getVivo == false){
                this.#guerrerosMuertos.push(guerrero);
            }
        });
    }

}