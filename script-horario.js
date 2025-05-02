// Detectar rolagem para ativar animação da caixa
window.addEventListener('scroll', () => {
    const caixa = document.querySelector('.caixa');
    const topCaixa = caixa.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    if (topCaixa < alturaJanela - 100) {
        caixa.classList.add('visible');
    }
});
