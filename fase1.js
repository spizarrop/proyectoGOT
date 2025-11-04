"use strict";
import { Personaje } from "./personaje.js";
import { Casa } from "./casa.js";
import { Reino } from "./reino.js";
import { Arma } from "./arma.js";

// Armas
const reinoPoniente = new Reino('Reino de Poniente');

// Casas
const casaStark = new Casa('Casa Stark','Winter is coming');
const casaLanister = new Casa('Casa Lannister','¡Oye mi rugido!');

// Personajes
const jonSnow = new Personaje('Jon Snow',17);
const ariaStark = new Personaje('Aria Stark',11);
const jaimeLannister = new Personaje('Jaime Lannister',36);

// Armas
const garra = new Arma('Garra',5,'Cuerpo a cuerpo');
const aguja = new Arma('Aguja',3,'Cuerpo a cuerpo');

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLanister);

jonSnow.setArma = garra;
console.log(jonSnow.getNombre+" ha equipado el arma "+garra.getNombre);
ariaStark.setArma = aguja;
console.log(ariaStark.getNombre+" ha equipado el arma "+aguja.getNombre);

casaStark.agregarMiembro(jonSnow);
casaStark.agregarMiembro(ariaStark);
casaLanister.agregarMiembro(jaimeLannister);

reinoPoniente.setRey = jaimeLannister;

reinoPoniente.listarCasas();

reinoPoniente.mostrarRey();

casaStark.listarMiembros();
casaLanister.listarMiembros();

console.log(`Presentaciones:`);
jonSnow.presentarse();
ariaStark.presentarse();
jaimeLannister.presentarse();

console.log(`Armas:`);
garra.descripcion();
aguja.descripcion();

