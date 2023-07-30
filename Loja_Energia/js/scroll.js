// Selecionar o elemento com a classe .menu
const menu = document.querySelector('.menu');

// Adicionar um evento de rolagem à janela
window.addEventListener('scroll', function() {
    // Verificar a posição do scroll
    const scrollPosition = window.scrollY;

    // Definir uma posição em que deseja que a mudança de cor ocorra (por exemplo, 200 pixels do topo da página)
    const triggerPosition = 200;

    // Se o scroll atingir ou ultrapassar a posição de gatilho
    if (scrollPosition >= triggerPosition) {
        // Mudar a cor do elemento .menu
        menu.style.backgroundColor = '#6D56BF'; // Cor que você deseja quando o scroll mexer
    } else {
        // Restaurar a cor original do elemento .menu
        menu.style.backgroundColor = 'rgba(204, 0, 255, 0.2)'; // Cor original do elemento
    }
});
