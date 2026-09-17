const nombre = prompt("Cual es tu nombre?");
const anioActual = parseInt(prompt("En que año estamos?"));
const anioNacimiento = parseInt(prompt("En que año naciste?"));

const edad = anioActual - anioNacimiento;

const resultadoFinal = ("Tu nombre es: " + nombre + " y "
    + "tu edad es: " + edad + "." + " Realizando el calculo de: "
    + anioActual + " - " + anioNacimiento + " = " + edad)

console.log(resultadoFinal);
alert(resultadoFinal);