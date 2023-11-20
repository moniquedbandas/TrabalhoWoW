// Função para ajustar a posição do footer
function ajustarFooter() {
    const alturaConteudo = document.body.clientHeight;
    const alturaJanela = window.innerHeight;
    const footer = document.querySelector('footer');

    if (alturaConteudo <= alturaJanela) {
        // footer.style.position = 'fixed'; //fixa a posição do footer
        // footer.style.bottom = '0'; //e deixa o footer no final da pagina
        // footer.style.width = '50%';
        // footer.style.marginLeft = 'auto';
        // footer.style.marginRight = 'auto';
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '50%'; /* Centraliza o lado esquerdo */
        footer.style.transform = 'translateX(-50%)'; /* Move 50% para trás */
        footer.style.width = '50%';
       
    } else {
        footer.style.position = 'static'; //define a posição do footer como padrão
    }
}

// Chamando a função quando a página é carregada e redimensionada
window.addEventListener('load', ajustarFooter);
window.addEventListener('resize', ajustarFooter);
