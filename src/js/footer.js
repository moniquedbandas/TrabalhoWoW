function ajustarFooter() {
    const alturaConteudo = document.body.clientHeight;
    const alturaJanela = window.innerHeight;
    const footer = document.querySelector('footer');

    if (alturaConteudo < alturaJanela) {
        footer.style.position = 'fixed'; //fixa a posição do footer
        footer.style.bottom = '0'; //e deixa o footer no final da pagina       
        footer.style.left = '50%'; /* Centraliza o lado esquerdo */
        footer.style.transform = 'translateX(-50%)'; /* Move 50% para trás */
        footer.style.width = '70%';
        /**
        |*Essencialmente, as propriedades left: 50% e transform: translateX(-50%) são o cerne dessa técnica 
        |para centralizar o footer horizontalmente. Elas posicionam o elemento de modo que seu centro fique no 
        |*ponto médio horizontal da janela do navegador. Isso permite que o footer seja centralizado 
        |*independentemente da largura da janela ou do conteúdo na página.
        */
    } else {
        footer.style.position = 'static'; //define a posição do footer como padrão
    }
}
window.addEventListener('load', ajustarFooter);
window.addEventListener('resize', ajustarFooter);
