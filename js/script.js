$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu').removeClass('active');
       $('body').removeClass('lock');
   });  
   $('.cases__prev').on('click', function() {
     $('.cases__carousel').slick('slickPrev');
   });
   $('.cases__next').on('click', function() {
     $('.cases__carousel').slick('slickNext');
   });
   $('.button').click(function (event) {
       $('.form-popup').addClass('open');
       $('body').addClass('lock');
   }); 
   

 



   $('.form-popup').submit(function (event) {
       if(!$('.form-popup__input:nth-child(3) label').hasClass('active')){
         event.preventDefault();
         $('.form-popup__input:nth-child(3) label').html('We need to fill in').addClass('error');
       }else{
         $('.form-popup__input:nth-child(3) label').html('Your name').removeClass('error');
       }
       if(!$('.form-popup__input:nth-child(4) label').hasClass('active')){
         event.preventDefault();
         $('.form-popup__input:nth-child(4) label').html('We need to fill in').addClass('error');
       }else{
         $('.form-popup__input:nth-child(4) label').html('Corporate email').removeClass('error');
       }
       if(!$('.form-popup__input:nth-child(5) label').hasClass('active')){
         event.preventDefault();
         $('.form-popup__input:nth-child(5) label').html('We need to fill in').addClass('error');
       }else{
         $('.form-popup__input:nth-child(5) label').html('Contact number').removeClass('error');
       }
   });    
   $('#agree').on('change', function() {
      if(!$(this).is(':checked')){
       $('.form-popup__button').attr('disabled', 'disabled');
     }else{
      $('.form-popup__button').removeAttr('disabled');
     }
   });   

   $('.form-popup__close, .form-popup__close1').click(function (event) {
       $('.form-popup').removeClass('open');
       $('body').removeClass('lock');
   }); 
   $('.form-popup__input input, .form-popup__textarea textarea').focus(function (event) {
      $(this).next().addClass('active');
   });
   $('.form-popup__input input, .form-popup__textarea textarea').blur(function (event) {
      if(!$(this).val()){
        $(this).next().removeClass('active');
      }
   });
   
    $('.technology__dots span').click(function(event){
      $  ('.technology__dots span').removeClass('current');
        $(this).addClass('current');
    });
   $('.cases__carousel').slick({
      arrows: false,
      dots: false,
      autoplay:false,
      infinite:true,
      swipe:true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1434,
          settings: {
            slidesToShow:3,
          }
        },
         {
          breakpoint: 1071,
          settings: {
            slidesToShow:2,
          }
        },  
         {
          breakpoint: 750,
          settings: {
            slidesToShow:1.2,
            infinite:false,
          }
        },
         {
          breakpoint: 500,
          settings: {
            slidesToShow:1,
            infinite:true,
            dots:true,
          }
        },
      ]         
   });
    $('.cases__carousel')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.cases__current span').html(currentSlide + 1);
     });

  AOS.init({
     once: true,
  });   
 
});    


$(document).scroll(function () {
   var s_top = $(window).scrollTop() + $(window).height(); 
   var tpx = $('.cases').offset().top + $('.cases').height()/6;
   if(s_top > tpx){
      $('.cases__item, .cases__carousel').addClass('active');
   }else{
      $('.cases__item, .cases__carousel').removeClass('active');
   }


});      
$('.technology__body').scroll(function () {
    var tab1 = $('.technology__left').offset();
    var tab2 = $('.technology__mid').offset();
    var tab3 = $('.technology__right').offset();
     if(tab1.left < $('.technology__left').width()/1.7){
         $('.technology__dots span').removeClass('current');
         $('.technology__dots span:nth-child(1)').addClass('current');
     }
     if(tab2.left < $('.technology__mid').width()/1.7){
         $('.technology__dots span').removeClass('current');
         $('.technology__dots span:nth-child(2)').addClass('current');
     }
     if(tab3.left < $('.technology__right').width()/1.7){
         $('.technology__dots span').removeClass('current');
         $('.technology__dots span:nth-child(3)').addClass('current');
     }
});


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}