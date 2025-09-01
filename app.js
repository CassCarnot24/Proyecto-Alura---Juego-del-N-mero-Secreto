let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);
    
    if(NumeroDeUsuario === NumeroSecreto) {
        AsignarTextoElemento("p", `Acertase el Número en ${Intentos} ${(Intentos==1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó.
        if (NumeroDeUsuario > NumeroSecreto) {
            AsignarTextoElemento("p", "El número secreto es menor");
        } else {
            AsignarTextoElemento("p", "El número secreto es mayor");
        }
        Intentos++;
        LimpiarCaja();
    }
    return;
}


function LimpiarCaja() {
    document.querySelector("#ValorUsuario").value = "";
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(NumeroGenerado);
    console.log(ListaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (ListaNumerosSorteados.length == NumeroMaximo) {
        AsignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado está incluído en la lista
        if (ListaNumerosSorteados.includes(NumeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado
        }
    }
}

function CondicionesIniciales() {
AsignarTextoElemento("h1", "Juego del Número Secreto");
AsignarTextoElemento("p", `Indica un Número del 1 al ${NumeroMaximo}`);  
NumeroSecreto = GenerarNumeroSecreto();
Intentos = 1;
}

function ReiniciarJuego() {
    //Limpiar la Caja
    LimpiarCaja();
    //Indica mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    CondicionesIniciales();
    //Deshabilitar el botón de Nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

CondicionesIniciales();
