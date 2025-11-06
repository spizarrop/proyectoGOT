"use strict";
import { Personaje } from "./personaje.js";
import { Guerrero } from "./personajesEspeciales/guerrero.js";
import { Consejero } from "./personajesEspeciales/consejero.js";
import { Rey } from "./personajesEspeciales/rey.js";
import { Casa } from "./casa.js";
import { Reino } from "./reino.js";
import { Arma } from "./arma.js";

// ------ FASE 1 -------
 
// Armas
const reinoPoniente = new Reino('Reino de Poniente');

// Casas
const casaStark = new Casa('Casa Stark','Winter is coming');
const casaLanister = new Casa('Casa Lannister','¡Oye mi rugido!');

// Personajes
const jonSnow = new Guerrero('Jon Snow',17);
//const ariaStark = new Guerrero('Aria Stark',11);
//const jaimeLannister = new Rey('Jaime Lannister',36,0);
const tyrionLannister = new Consejero('Tyrion Lannister',32);
const robertBaratheon = new Rey('Robert Baratheon',32,15);

// Armas
const garra = new Arma('Garra',5,'Cuerpo a cuerpo');
const aguja = new Arma('Aguja',3,'Cuerpo a cuerpo');

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLanister);

jonSnow.setArma = garra;
console.log(jonSnow.getNombre+" ha equipado el arma "+garra.getNombre);
//ariaStark.setArma = aguja;
//console.log(ariaStark.getNombre+" ha equipado el arma "+aguja.getNombre);

casaStark.agregarMiembro(jonSnow);
//casaStark.agregarMiembro(ariaStark);
//casaLanister.agregarMiembro(jaimeLannister);
casaLanister.agregarMiembro(tyrionLannister);
casaLanister.agregarMiembro(robertBaratheon);

reinoPoniente.setRey = robertBaratheon;
/* 
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
aguja.descripcion(); */


// ------ FASE 2 -------

console.log('----- FASE 2 ----');

jonSnow.presentarse();
jonSnow.luchar();
jonSnow.entrenar();

tyrionLannister.presentarse();
tyrionLannister.luchar();

tyrionLannister.aconsejar(reinoPoniente.getRey);

robertBaratheon.presentarse();
robertBaratheon.gobernar(); 
robertBaratheon.luchar();
