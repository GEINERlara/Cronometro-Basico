let milesima = 0;
let minutos = 0;
let segundos = 0;
let bandera = true;
let identificador = 0;
let historial = [];

function inicioConteo() {
    if (bandera) {
        identificador = setInterval(proceso, 10);
        bandera = false;
        console.log(identificador)

        function proceso() {

            if (milesima==99){
                segundos++;
                milesima = 0;
            }
            if (segundos==99){
                minutos++;
                segundos = 0;
            } 
            if (minutos==99){
                minutos = 0;
            }
            milesima++;
            document.getElementById("parrafo").innerHTML = minutos + ": " + segundos + ": " + milesima;
                
            
        }
    }

}



function pararConteo() {
    clearInterval(identificador);
    bandera = true;
}

function borrarRegistro() {
    pararConteo();
    let registro = minutos + ": " + segundos + ": " + milesima;
    historial.push(registro);
    document.querySelector("#historial").innerHTML += registro + "<br>";
    minutos = 0;
    segundos = 0;
    milesima = 0;
    document.getElementById("parrafo").innerHTML = registro;

}