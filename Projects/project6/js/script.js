 // Progress bar code start

 var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function(){
    var max = -219.99078369140625;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
    percent = value.getAttribute('data-progress');
      value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
      value.querySelector('.value').innerHTML = percent + '%';
    });
  }
// end progress bar 

$('.scren-owl').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  margin:50,
  responsiveClass:true,
 responsive:{
      0:{
          items:1,
          nav:false,
          dots:false
      },
      700:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true,
      },
      1400:{
          items:3,
          nav:true,
          loop:true,
      }
  }

})


$('.owl-testimonial').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:7000,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots:false
      },
      600:{
          items:2,
          nav:false,
          dots:false
      },
      1400:{
          items:2,
          nav:true,
          loop:true,
      }
  }
})


$('.owl-partner').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:2,
            nav:false,
            dots:false
        },
        1000:{
            items:4,
            nav:false,
            dots:false,
            loop:true
        },
        1400:{
            items:4,
            nav:true,
            dots:false,
            loop:true
        }
    }
  })
  $( ".owl-prev").html('<i class="fas fa-arrow-left"></i>');
  $( ".owl-next").html('<i class="fas fa-arrow-right"></i>');