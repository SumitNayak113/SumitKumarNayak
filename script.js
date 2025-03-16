// const form=document.querySelector('form');
// const Name=document.getElementById("name");
// const email=document.getElementById("email");
// const number=document.getElementById("number");
// const subject=document.getElementById("subject");
// const message=document.getElementById("message");

// function sendEmail(){
//     const bodyMessage=`Name: ${Name.value}<br> Email: ${email.value}<br>Number: ${number.value}<br>Message: ${message.value}`;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "sumitentertain113@gmail.com",
//         Password : "BFC079A9E7E1BC6068A62B91E2A56AD85E13",
//         To : 'sumitentertain113@gmail.com',
//         From : "sumitentertain113@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );

// }
// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     sendEmail();

// });


























var typed = new Typed(".text", {
    strings: ["Python Full Stack Developer", "Python Developer"], // Fixed 'String' to 'strings'
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true // Added missing comma
});






// contact page

// function sendMail(){
//     let parms={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         number:document.getElementById("number").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("message").value,
//     }
//     emailjs.send("service_7ep645b","template_l9tk9oj",parms).then(alert("Email Sent!!"))
// }

    




//toogle icon navbar


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {  // sign up
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

        });
    }


   });

   //sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img,  .education-content, .skills-box, .contact form', { origin: 
    'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 
        'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 
            'right' });



            // const typed = new typed('.multiple-text', {
            //     strings: ['Web Developer', 'Software Engineer'],
            //     typeSpeed: 100,
            //     backSpeed: 100,
            //     backDelay: 1000,
            //     loop: true
            // });
            
 


            // document.addEventListener("DOMContentLoaded", function () {
            //     var typed = new Typed('.multiple-text', {
            //         strings: ['Web Developer', 'Software Engineer'],
            //         typeSpeed: 100,
            //         backSpeed: 100,
            //         backDelay: 1000,
            //         loop: true
            //     });
            // });
