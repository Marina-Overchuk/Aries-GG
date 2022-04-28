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

  const blogSlider = new Swiper('.blog-slider', {
    // Default parameters
    slidesPerView: 4,
    speed: 1200,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },  
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    
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

  const allBlogSlider = new Swiper('.allBlog-slider', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    loop: true,
    // Responsive breakpoints
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.blog__pagination',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + (index + 1) + '</span>';
        },
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



                 