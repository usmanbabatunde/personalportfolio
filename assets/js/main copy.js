// Menu show 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    // console.log(toggle);
    // console.log(nav);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); //javascript css to display nav menu
        });
    }
}
showMenu('nav-toggle', 'nav-menu')

// Active and Remove Menu Mobile Veiw
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink,forEach((n)=> n.addEventListener('click', linkAction));

// Scroll Reaveal Animation
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
});

//Scroll Home
sr.reveal('.home__title',{});
sr.reveal('.button',{delay:200});
sr.reveal('.home__img',{delay:400});
sr.reveal('.home__social-icon',{interval:300});

//Scroll About
sr.reveal('.about__title',{});
sr.reveal('.about__subtitle',{delay:200});
sr.reveal('.home__text',{delay:400});


//Scroll Skills
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{delay:200});
sr.reveal('.skills__data',{interval:400});
sr.reveal('.skills__img',{delay:300});

//Scroll Work
sr.reveal('.work__img', {interval: 200});

//Scroll Contact
sr.reveal('.contact__input', {interval:300});