// change nav style on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scrolled', window.scrollY >0);
})

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  const nav = document.querySelector('.nav-links');
    const openNavBtn = document.querySelector('#nav__toggle-open');
    const closeNavBtn = document.querySelector('#nav__toggle-close');

    const openNav = () => {
      nav.style.display ='flex';
      openNavBtn.style.display ='none';
      closeNavBtn.style.display ='inline-block';
  }

    openNavBtn.addEventListener('click', openNav);


    const closeNav = () => {
      nav.style.display ='none';
      openNavBtn.style.display ='inline-block';
      closeNavBtn.style.display ='none';
  }

    closeNavBtn.addEventListener('click', closeNav);

    if(document.body.clientWidth < 1059) {
      nav.querySelectorAll('li a').forEach(navLink => {
          navLink.addEventListener('click', closeNav);
        })
    }


// function sendEmail() {
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "imthedude026@gmail.com",
//     Password : "!!!!!!!!",
//     To : 'izadiyasin@gmail.com',
//     From : " document.getElementById("email").value",
//     Subject : "document.getElementById("subject").value",
//     Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value
//     + "<br> Subject: " + document.getElementById("subject").value
//     + "<br> Message: " + document.getElementById("message").value
// }).then(
//   message => alert(Your-MessageHasBeenSentSuccesfully)
// );
// }