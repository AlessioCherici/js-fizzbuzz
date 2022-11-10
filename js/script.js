let valuebut = document.getElementById("bottone");

valuebut.addEventListener("click",function(){
    let destinazione = document.getElementById("destinazione");
    let eta = document.getElementById("etacliente");
    let destinationValue = destinazione.value;
    let etaValue= eta.value;
    console.log(destinationValue);
    console.log(etaValue);

    let prezzo = (destinationValue * 0.21);

        if (etaValue >= 65) {
            prezzo = (prezzo - prezzo * 40 / 100);
        }

        else if (etaValue > 0 && etaValue < 18){
            prezzo = (prezzo - prezzo * 20 / 100);
        }

        prezzo = prezzo.toFixed(2);
        console.log(prezzo);

        document.getElementById("costo").innerHTML = prezzo + "€" 
        document.getElementById("co2").innerHTML = destinationValue * 0.02 + "Kg di CO2"

});


