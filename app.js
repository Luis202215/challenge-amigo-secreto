// El principal objetivo de este desafío es fortalecer
//  tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarando variable de tipo array 
// que almacenara nombre de amigos ingresados

let amigos =[];

//declarando las variables que usara para comprobar los datos ingresados.
let comprobarNumero = /\d/;
let comprobarCaracterEspecial = /\W/;

//Implementando Funcion para agregar amigos

function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado.trim() === "") {
        alert("Por favor, inserte un nombre válido.")
    } else {
        if (comprobarNumero.test(amigoIngresado)) {
            alert("Por favor, ingrese solo letras.")
        } else{
            if (comprobarCaracterEspecial.test(amigoIngresado)) {
                alert("Por favor, ingrese solo letras")
            } else {
                amigos.push(amigoIngresado);
            }
        }
    }
    ingresarEnLista();
    limpiarCaja("amigo");
    console.log(amigoIngresado);
    console.log(amigos);
}

//Creando Funcion e implementandola para limpiar el campo de entrada

function limpiarCaja (x){
    document.getElementById(x).value = "";
}

//Creando e implementando función para agregar nombres de amigos en forma de lista.
let lista = document.getElementById("listaAmigos");
function ingresarEnLista () {
    lista.innerHTML ="";
    for (let i = 0 ; i < amigos.length; i++) {
        lista.innerHTML += `<li> ${amigos[i]}</li>`;
    }
}

//Creando e implementando funcion para seleccionar un amigo de la lista.
let amigoSecreto = document.getElementById("resultado");
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, ingrese amigos a la lista.");
    } else{
        let numeroGenerado = Math.floor((Math.random() * amigos.length));
        amigoSecreto.innerHTML = `Tu amigo secreto es:<br>${amigos[numeroGenerado]}</br>`;
    }
}