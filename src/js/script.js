
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
        slideAtual.style.display = 'block';//se o slide atual existir, a imagem aparece
    }
}

function proximoSlide() {
    slideAtual++;
    if (slideAtual > 9) {
        slideAtual = 1;
    }//se o slide atual for maior que 9, ele volta para o primeiro slide
    mostrarSlide(slideAtual);//chama a função de mostrar o slide com o slideAtual como parametro
}

setInterval(proximoSlide, 4000);