import { Arma } from "../arma.js";
import { Personaje } from "../personaje.js";

export class Guerrero extends Personaje {

    #arma;
    #vida;

    constructor(nombre, edad) {
        super(nombre, edad);
        this.#arma = new Arma;
        this.#vida = 100;
    }

    get getArma() {
        return this.#arma;
    }

    set setArma(arma) {
        if (arma instanceof Arma) {
            this.#arma = arma;
        }
    }

    get getVida() {
        return this.#vida;
    }

    set setVida(vida) {
        this.#vida = vida;
    }

    luchar() {
        console.log(`${this.getNombre} ataca con su ${this.getArma.getNombre}, causando ${this.getArma.getDamage} puntos de daño.`);
    }

    entrenar() {
        console.log(`${this.getNombre} entrena sin descanso para la próxima batalla.`);
    }

    recibirDamage(puntos) {
        this.#vida -= puntos;
        if (this.#vida <= 0) {
            this.#vida = 0;
            this.morir();
        }
    }

    atacar(objetivo) {
        if (objetivo instanceof Guerrero) {
            const damage = Math.floor(this.#arma.getDamage * (0.7 + Math.random() * 0.6)); // entre un 70% y 130% del daño base
            console.log(`${this.getNombre} atata a ${objetivo.getNombre} causando ${damage} puntos de daño.`);
            objetivo.recibirDamage(damage);
        }
    }

    morir(){
        this.setVivo = false;
        console.log(`${this.getNombre} ha muerto.`);
    }

}