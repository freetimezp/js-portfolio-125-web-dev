/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(`.perfil, .contact__form`);
sr.reveal(`.info`, { origin: 'left', delay: 800 });
sr.reveal(`.skills`, { origin: 'left', delay: 1000 });
sr.reveal(`.about`, { origin: 'right', delay: 1200 });

sr.reveal(`.projects__card, .services__card, .experience__card`, { interval: 100 });












