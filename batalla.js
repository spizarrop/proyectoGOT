import { Casa } from "./casa.js";
import { Guerrero } from "./personajesEspeciales/guerrero.js"

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
                if (personaje.getVivo) {
                    this.#guerrerosCasaA.push(personaje);
                }
            });

            casaB.getMiembros.forEach(personaje => {
                if (personaje.getVivo) {
                    this.#guerrerosCasaB.push(personaje);
                }
            });

            console.log('Iniciamos la lucha...');
            console.log(`Los guerreros que pelearán de la ${casaA.getNombre} serán los siguientes:`);
            console.log(this.#guerrerosCasaA);
            console.log(`Los guerreros que pelearán de la ${casaB.getNombre} serán los siguientes:`);
            console.log(this.#guerrerosCasaB);

            let indiceA = 0;
            let indiceB = 0;

            while (indiceA < this.#guerrerosCasaA.length && indiceB < this.#guerrerosCasaB.length) {
                const guerreroA = this.#guerrerosCasaA[indiceA];
                const guerreroB = this.#guerrerosCasaB[indiceB];

                console.log(`Nuevo enfrentamiento: ${guerreroA.getNombre} vs ${guerreroB.getNombre}`);

                guerreroA.atacar(guerreroB);
                if (!guerreroB.getVivo) {
                    this.#guerrerosMuertos.push(guerreroB);
                    indiceB++;
                } else {
                    guerreroB.atacar(guerreroA);
                    if (!guerreroA.getVivo) {
                        this.#guerrerosMuertos.push(guerreroA);
                        indiceA++;
                    }
                }

                console.log(`${guerreroA.getNombre}: ${guerreroA.getVida} | ${guerreroB.getNombre}: ${guerreroB.getVida}`);
            }

            console.log('La batalla ha terminado.');

            if (indiceA == this.#guerrerosCasaA.length) {
                console.log(`La batalla ha sido ganada por la casa ${casaB.getNombre}`);
            } else {
                console.log(`La batalla ha sido ganada por la casa ${casaA.getNombre}`);
            }

        }

    }

    mostrarGuerrerosMuertosEnCombate() {
        console.log('Muertos en la batalla:');
        console.log(this.#guerrerosMuertos);
    }
}
