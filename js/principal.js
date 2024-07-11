import Cl_personas from "./Cl_personas.js";
import Cl_mayorE from "./Cl_mayorE.js";

let per1 = new Cl_personas("Luis", 15);
let per2 = new Cl_personas("Ana", 19);
let per3 = new Cl_personas("José", 21);
let per4 = new Cl_personas("Carme", 17);
let per5 = new Cl_personas("Rosa", 18);
let per6 = new Cl_personas("José", 22);
let per7 = new Cl_personas("María", 17);
let per8 = new Cl_personas("Luz", 19);
let per9 = new Cl_personas("Rafael", 23);
let per10 = new Cl_personas("Liz", 15);
let per11 = new Cl_personas("Marcos", 20);
let per12 = new Cl_personas("Leo", 16);

let mayorE = new Cl_mayorE();

mayorE.procesarPersonas(per1);
mayorE.procesarPersonas(per2);
mayorE.procesarPersonas(per3);
mayorE.procesarPersonas(per4);
mayorE.procesarPersonas(per5);
mayorE.procesarPersonas(per6);
mayorE.procesarPersonas(per7);
mayorE.procesarPersonas(per8);
mayorE.procesarPersonas(per9);
mayorE.procesarPersonas(per10);
mayorE.procesarPersonas(per11);
mayorE.procesarPersonas(per12);

let salida = document.getElementById("Salida");
salida.innerHTML += "Cantidad de personas: " + mayorE.contT + "<br> Cantidad de personas mayor de edad: " + mayorE.contMayor + "<br> Porcentaje de personas mayor de edad: " + mayorE.porcMayor() +"%"