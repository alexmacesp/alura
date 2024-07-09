function intentoDeUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1 ? 'intento':'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        numeroUsuario > numeroSecreto ? asignarTextoElemento('p','El numero es menor'):asignarTextoElemento('p','El numero es mayor');
        numeroIntentos++;
        limpiarCaja();
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (numerosSecretosVistos.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los numeros posibles')
    }
    else{
        if (numerosSecretosVistos.includes(numeroGenerado)){
        return numeroAleatorio()
        }
        else{
            numerosSecretosVistos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    numeroIntentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    console.log(numerosSecretosVistos);
}

let numeroMaximo = 10;
let numerosSecretosVistos = [];
let numeroIntentos = 1;

condicionesIniciales();