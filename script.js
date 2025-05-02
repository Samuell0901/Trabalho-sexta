// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Rolagem suave para links internos
    const links = document.querySelectorAll('nav a, .principal a, .terceira a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link é interno (mesma página)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Adiciona botão de voltar ao topo
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.classList.add('back-to-top');
    backToTopButton.style.display = 'none';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#ff6a00';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.fontSize = '20px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '1000';
    
    document.body.appendChild(backToTopButton);
    
    // Mostra ou esconde o botão com base na posição da rolagem
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Adiciona evento de clique ao botão para voltar ao topo
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Adiciona animação de fade para elementos quando entram na viewport
    const fadeElements = document.querySelectorAll('.segunda, .terceira, .imagens img');
    
    // Função para verificar se um elemento está na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Função para verificar e aplicar o efeito de fade
    function checkFade() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configura estilo inicial para elementos de fade
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Verifica elementos na carga inicial e durante o scroll
    window.addEventListener('load', checkFade);
    window.addEventListener('scroll', checkFade);
});