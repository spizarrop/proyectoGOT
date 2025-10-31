"use strict";
import { Personaje } from "./personaje.js";
import { Casa } from "./casa.js";
import { Reino } from "./reino.js";
import { Arma } from "./arma.js";

// Armas
const reinoPoniente = new Reino('Reino de Poniente');

// Casas
const casaStark = new Casa('Casa Stark','');
const casaLanister = new Casa('Casa Stark','');

// Personajes
const jonSnow = new Personaje('Jon Snow',17);
const ariaStark = new Personaje('Aria Stark',11);

// Armas
const garra = new Arma();
const aguja = new Arma();

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLanister);

jonSnow.setArma(garra);
ariaStark.setArma(aguja);

