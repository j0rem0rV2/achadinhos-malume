
AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hero__button');
    const sections = document.querySelectorAll('.store__home');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');

            sections.forEach(section => {
                // Verifica se a classe `active` deve ser adicionada ou removida
                if (section.classList.contains(target)) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

