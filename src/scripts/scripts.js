
AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hero__button');
    const sections = document.querySelectorAll('.store__home');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');

            sections.forEach(section => {
                if (section.classList.contains(`store__home--${target}`)) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});