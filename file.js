var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-60px"; /* Regola questo valore in base all'altezza della tua barra di navigazione */
    }

    prevScrollpos = currentScrollPos;
};
