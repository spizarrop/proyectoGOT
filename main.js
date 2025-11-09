"use strict";
import { Personaje } from "./personaje.js";
import { Guerrero } from "./personajesEspeciales/guerrero.js";
import { Consejero } from "./personajesEspeciales/consejero.js";
import { Rey } from "./personajesEspeciales/rey.js";
import { Casa } from "./casa.js";
import { Reino } from "./reino.js";
import { Arma } from "./arma.js";
import { Batalla } from "./batalla.js";

// ------ FASE 1 -------
/*  
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
const garra = new Arma('Garra',25,'Cuerpo a cuerpo');
const aguja = new Arma('Aguja',30,'Cuerpo a cuerpo');

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

reinoPoniente.setRey = robertBaratheon; */
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

/* console.log('----- FASE 2 ----');

jonSnow.presentarse();
jonSnow.luchar();
jonSnow.entrenar();

tyrionLannister.presentarse();
tyrionLannister.luchar();

tyrionLannister.aconsejar(reinoPoniente.getRey);

robertBaratheon.presentarse();
robertBaratheon.gobernar(); 
robertBaratheon.luchar(); */

// ------ FASE 3 -------

console.log('----- FASE 3 ----');

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

// === GUERREROS DE LA CASA STARK ===
const jon = new Guerrero("Jon Snow", 25, true, casaStark, garra);
const arya = new Guerrero("Arya Stark", 18, true, casaStark, aguja);
const robb = new Guerrero("Robb Stark", 22, false, casaStark, espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, casaStark, hacha);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32, true, casaLannister, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, casaLannister, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, casaLannister, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, casaLannister, hacha);

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

casaStark.listarMiembros();
casaLannister.listarMiembros();

const batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark, casaLannister);

batallaBastardos.mostrarGuerrerosMuertosEnCombate();