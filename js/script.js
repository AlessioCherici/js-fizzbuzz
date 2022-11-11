let containerPrincipale = document.querySelector(".mio-container");

for (let i = 1; i <= 100; i++) {

    let intero3 = (i / 3);
    let intero5 = (i / 5);
    let intero35 = (intero3 + intero5);

/* Userò una serie di if else if per capirli meglio!*/

    if (Number.isInteger(intero35) == true) {
        console.log(intero35);
        document.getElementById("mio-container").innerHTML += '<div class="square"><p>FizzBuzz</p></div>';
    }

    else if (Number.isInteger(intero3) == true) {
        console.log("Ha funzionato if 3");
        console.log(intero3);
        document.getElementById("mio-container").innerHTML += '<div class="square"><p>Fizz</p></div>';
    }

    else if (Number.isInteger(intero5) == true) {
        console.log("Ha funzionato if 5");
        document.getElementById("mio-container").innerHTML += '<div class="square"><p>Buzz</p></div>';
    }

    else {
        document.getElementById("mio-container").innerHTML += '<div class="square"><p>'+i+'</p></div>'
    }
    

}


