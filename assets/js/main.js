/*------- Navigation bar function------*/
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    }
    else {
        menuBtn.className = "nav-menu";
    }
}
/*------- Add shadow on navigation bar whilw scrolling------*/

window.onscroll = function () { headerShadow() };
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }
    else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
/*------- Typing effect------*/
var typingEffect = new Typed(".typedText", {
    String: ["Designer","Devloper"],
    loop: true,
    typespeed: 1000,
    backSpeed: 100,
    backDelay: 2000
})
/*------- scroll reveal animation------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*------- HOME------*/
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skill-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* send email */
function sendEmail() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var mailText = "Name: " + userName +
        "</br>Email: " + email +
        "</br>Message: " + message;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "demo1817@gmail.com",
        Password: "0B6F682768D9876E62E4AB7982C2AAB6867A",
        To: 'aniketgurav109@gmail.com',
        From: email,
        Subject: "New contact from Enquiey",
        Body: mailText
    }).then(
        message => alert(message)
    );
}
// Host: "smtp.mailendo.com",
// Username: "demo1817@gmail.com",
// Password: "0B6F682768D9876E62E4AB7982C2AAB6867A",