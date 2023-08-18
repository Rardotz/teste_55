window.onload = function(e){
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position='fixed';

        } else{
            menu.style.position = 'initial';
        }
    });
} 

const hamburguer = document.querySelector(".hamburguer");
const some = document.querySelector(".some");
const header = document.querySelector("header");


header.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    some.classList.toggle('active');
    
   
})




const navLinksEls = document.querySelectorAll('.itens');
const sectionEls = document.querySelectorAll('section');


let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 200)) {
            currentSection = sectionEl.id;
        }
    });

    navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSection)){
            document.querySelector('.actives').classList.remove('actives');
            navLinksEl.classList.add('actives');
        }
    })
})






const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animation';


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 90) / 100);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}


window.addEventListener('scroll', function() {
    animeScroll();
    
})






var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    slidesPerView: 'auto',
      autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0.8,
     
      
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;
 
// Configura o valor em --vh na raiz do documento
document.documentElement.style.setProperty('--vh', `${vh}px`);


3
4
5
6// evita o bug da tela
// Escuta o evento resize
window.addEventListener('resize', () => {
  // Executa o mesmo script de antes
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });