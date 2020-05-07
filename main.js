$(document).ready(function() {

    // Creare in HTML una griglia di 5x5 quadrati vuoti.
    // Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
    // BONUS 1: generare la griglia con jQuery
    // BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde


    //estraggo 25 numeri random tra 1 e 10
    function genera_random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var venticinque_numeri = [];

    do {
        var numero = genera_random(1,10);
        venticinque_numeri.push(numero);

    } while (venticinque_numeri.length < 25);

    console.log(venticinque_numeri);

    // li scrivo all'interno dei quadrati





});
