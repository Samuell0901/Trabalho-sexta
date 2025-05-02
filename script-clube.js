document.addEventListener("DOMContentLoaded", function () {
    const elementoAnimado = document.querySelector(".tabela-container");

    if (!elementoAnimado) return; // Garante que o elemento exista

    function animarAoScroll() {
        const rect = elementoAnimado.getBoundingClientRect();
        const alturaJanela = window.innerHeight;

        if (rect.top < alturaJanela - 100) {
            elementoAnimado.classList.add("aparecer");
            window.removeEventListener("scroll", animarAoScroll);
        }
    }

    window.addEventListener("scroll", animarAoScroll);
    animarAoScroll(); // Chamada inicial para caso o elemento já esteja visível
});
