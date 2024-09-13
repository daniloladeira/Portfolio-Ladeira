document.addEventListener('DOMContentLoaded', () => {
    const introducao = document.querySelector('.introducao');
    const experiencia = document.querySelector('.experiencia');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const introducaoTop = introducao.getBoundingClientRect().top;
        const experienciaTop = experiencia.getBoundingClientRect().top;
        const elementVisible = 150;
        if (introducaoTop < windowHeight - elementVisible) {
            introducao.classList.add('visible');
        } else {
            introducao.classList.remove('visible');
        }

        if (experienciaTop < windowHeight - elementVisible) {
            experiencia.classList.add('experiencia-visible');
        } else {
            experiencia.classList.remove('experiencia-visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
