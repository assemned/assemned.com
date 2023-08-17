/*====================== toggle icon navbar =========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*====================== scroll section active link =========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigh = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigh) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /*====================== sticky navbar =========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

/*====================== remove toggle icon and navbar when click navbat link (scroll) =========================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*====================== scroll reveal =========================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

/*====================== typed js =========================*/
const typed = new Typed('.multiple-text', {
    strings: ['مطور واجهات أمامية','مصمم UI/UX','طالب طب'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});



/*====================== contact form =========================*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbyz6_aYiUc19k0tmpKxt7uinnEPmG6ZZwbgrPXQVx_WeigDIIzP-iyvy6CER1Ioiwz5LQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "تم الإرسال بنجاح!"
                setTimeout(function(){
                msg.innerHTML = ""
                },3000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })



/*====================== dark mode =========================*/

    var darkmodeicon = document.getElementById("darkmodeicon");

    darkmodeicon.onclick = function(){
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            darkmodeicon.classList.remove('bx-sun');
            document.querySelector('header nav i').classList.add('bx-moon');
        }else{
            document.querySelector('header nav i').classList.add('bx-sun');
        };
    };