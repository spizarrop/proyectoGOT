export class Arma {

    #nombre;
    #damage;
    #tipo;

    constructor(nombre = "", damage = 0, tipo = "") {
        this.#nombre = nombre;
        this.#damage = damage;
        this.#tipo = tipo;
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getDamage() {
        return this.#damage;
    }

    set setDamage(damage) {
        this.#damage = damage;
    }

    get getTipo() {
        return this.#tipo;
    }

    set setTipo(tipo) {
        this.#tipo = tipo;
    }
    
    descripcion(){
        console.log(`Caractreristicas del arma '${this.#nombre}':\nDaño:${this.#damage}\nTipo:${this.#tipo} `);
    }

}