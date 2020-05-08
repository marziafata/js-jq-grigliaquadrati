$(document).ready(function() {

    // Creare in HTML una griglia di 5x5 quadrati vuoti.
    // Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
    // BONUS 1: generare la griglia con jQuery
    // BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

    for (var i = 0; i < 25; i++) {
        $('#griglia2').append('<div class="quadrato"></div>');
    }

    $('.quadrato').each(function(){
            var numero = genera_random(0, 10);
            if (numero % 2) {
                $(this).text(numero).addClass('rosso')
            } else if (numero == 0){
                $(this).text(numero).addClass('verde')
            } else {
                $(this).text(numero);
            }
    })

    function genera_random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
