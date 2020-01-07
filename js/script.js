//Amb getElementsByClassName tindrem tots els divs 'supercontenidor' ficats dins un array
let totesPags = document.getElementsByClassName("supercontenidor");
let paginaActual = 0;
let paginaAnterior;
let passant = false;

//Com que totes les pàgines estan amagades, fem que quan carregui tot, es mostri la primera.
// Primer div 'supercontenidor' => posició [0] de l'array.
totesPags[0].style.top = "0vh";

//Funció que quan la cridem, farà aparèixer la següent pàgina des d'avall.
function passaPagina(event) {
    // Només farem l'acció si no estem ja passant una pàgina
    if (passant == false) {
        passant = true;
        
        paginaAnterior = paginaActual;
        paginaActual++;
        // Fem que quan arribem al final, es torni a mostrar la primera pàgina
        //    if (paginaActual >= 5 ) {
        // Fent servir totesPags.length ens funcionarà independentment del nombre de pàgines que tinguem
        if (paginaActual >= totesPags.length) {
            paginaActual = 0;
        }

        // Fem l'acció en si: pugem la pàgina anterior fora de la pantalla, i hi posem l'actual.
        totesPags[paginaAnterior].style.top = "-100vh";
        totesPags[paginaActual].style.opacity = "1";
        totesPags[paginaActual].style.top = "0px";

        // D'aqui 3 segons farem que es pugui tornar a passar una altra pàgina.
        setTimeout(acabaTransicio, 3000);
    }


}

function acabaTransicio() {
    passant = false;
    //La pàgina que hem pujat, la baixem a sota de la pantalla, amagant-la primer per què no es vegi passar.
    totesPags[paginaAnterior].style.opacity = "0";
    totesPags[paginaAnterior].style.top = "100vh";
}


window.onwheel = passaPagina;
//També podriem cridar a la nostra funció que passa pàgina en reacció a altres events,
// com per exemple quan es faci click:
//window.onclick = passaPagina;
