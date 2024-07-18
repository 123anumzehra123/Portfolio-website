/*================scroll reveal==============*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal(' .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal(' .home-content h1, ', { origin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-content ', { origin: 'right' });

/*================sticky navbar==============*/
let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



/*================typed js=============*/
// const typed =new Typed('.multiple-text',{
//     strings:['Frontend Developer','Graphic Designer','Content Writer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }