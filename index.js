
// Solicitar la edad de un usuario, con un prompt y si es mayor de edad, 
// pedirle su nombre y apellido y saludarlo en el DOM, ¡Hola +nombre !

// let edad = prompt('Edad');
// if (edad >= 18) { 
//     let nombre = prompt('Nombre'); 
//     let apellido = prompt('Apellido');
//     document.write(`¡Hola ${nombre} ${apellido}!`)
// }
// else { document.write('Lo siento no eres mayor de edad')}

// Solicitar las 3 calificaciones de un usuario, a través de un formulario con 3 inputs 
// y un botón que diga enviar y sacar el promedio, si es mayor a 8, mostrarle en pantalla
//  ¡Felicidades, lo lograste!, si no, ¡Lo siento, tienes ordinario!

function promedio() {
let calificacion1 = ParseFloat(document.getElementById("calificacion1").value);
let calificacion2 = ParseFloat(document.getElementById("calificacion2").value);
let calificacion3 = ParseFloat(document.getElementById("calificacion3").value);
let ordinario =(calificacion1 + calificacion2 + calificacion3) / (3)
console.log(`Tu promedio es de ${ordinario}`);
if (ordinario>= 8) {
    console.log (`¡Felicidades, lo lograste!`);
} else {
    console.log ('¡Lo siento, tienes ordinario!')
}
}