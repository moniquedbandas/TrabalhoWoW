
var slideAtual = 1;

function mostrarSlide(numeroSlide) {
    for (var i = 1; i <= 9; i++) {
        var slide = document.getElementById('slide' + i);
        if (slide) {
            slide.style.display = 'none';
        }
    }
    var slideAtual = document.getElementById('slide' + numeroSlide);
    if (slideAtual) {
        slideAtual.style.display = 'block';
    }
}

function proximoSlide() {
    slideAtual++;
    if (slideAtual > 9) {
        slideAtual = 1;
    }
    mostrarSlide(slideAtual);
}

setInterval(proximoSlide, 4000);