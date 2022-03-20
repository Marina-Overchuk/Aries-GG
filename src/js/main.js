jQuery(document).ready(function(){

  console.log('ready');

  const mainSlider = new Swiper('.main-slider', {
    // Default parameters
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
         
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
      
    // Responsive breakpoints
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.main-pagination',
        type: 'bullets',
        clickable: true,
      },
  });




 
  $('.header__burger').on('click', function () {

    if($(this).hasClass('active')){
      $('.header-right__menu').hide();
      $(this).toggleClass("active");
      $('header').removeClass('header_fixed');
      $('body').css('overflow', 'auto');
    
    }
    else{
    
      $('.header-right__menu').show();
      $(this).toggleClass("active");
      $('body').css('overflow', 'hidden');
    
      $('header').addClass('header_fixed');
    
    }
    
    });

    $('.color__button').on('click', function(){
      $('.home-allgames__body').removeClass('visible_block');
      })
   
    new WOW().init();

    let scrollChange = 50;
    
    function headerScroll(params) {
      
      let scroll = $(window).scrollTop();
      
      if (scroll >= scrollChange) {
        $('header').addClass('header_scroll');

      } else {
        $('header').removeClass('header_scroll');

      }

    }

    $(document).on('scroll', ()=>{
      headerScroll();  
    })

    headerScroll();
}) 


document.querySelector('#one').oninput = () => {
  console.log(document.querySelector('#one').value);
    document.querySelector('.num').innerHTML = +document.querySelector('#one').value;
    }

document.querySelector('#two').oninput = () => {
    console.log(document.querySelector('#two').value);
      document.querySelector('.num2').innerHTML = +document.querySelector('#two').value;
    }

document.querySelector('#money').oninput = () => {
    console.log(document.querySelector('#money').value);
        document.querySelector('.hour').innerHTML = +document.querySelector('#money').value;
    }

   // document.querySelector('#money').oninput = () => {
     // console.log(document.querySelector('#money').value);
       //   document.querySelector('.sum').innerHTML = +document.querySelector('#money').value*24;
      //}
                 