import { Arma } from "../arma.js";
import { Personaje } from "../personaje.js";

export class Guerrero extends Personaje {
    
    #arma;

    constructor(nombre,edad) {
        super(nombre,edad);
        this.#arma = new Arma;
    }

    get getArma() {
        return this.#arma;
    }

    set setArma(arma) {
        if (arma instanceof Arma) {
            this.#arma = arma;
        }
    }

    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.getArma.getNombre}, causando ${this.getArma.getDamage} puntos de daño.`);
    }

    entrenar(){
        console.log(`${this.getNombre} entrena sin descanso para la próxima batalla.`);
    }

    recibirDamage(puntos){
        this.getVida; //añadir vida a la clase personaje
    }

    atacar(objetivo){

    }

}