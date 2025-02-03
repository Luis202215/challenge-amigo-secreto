// El principal objetivo de este desafío es fortalecer
//  tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarando variable de tipo array 
// que almacenara nombre de amigos ingresados

let amigos =[];

//Implementando Funcion para agregar amigos

function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado === "") {
        alert("Por favor, inserte un nombre válido.")
    } else {
        amigos.push(amigoIngresado);
    }
    console.log(amigoIngresado);
    console.log(amigos);
}