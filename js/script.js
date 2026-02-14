$(document).ready(function(){
  // Hero Carousel
  $('.slick-carousel').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    arrows:true
  });

  // Lightbox slider
  var lightbox = new SimpleLightbox('.gallery-slider a', { /* options */ });

  $('.gallery-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2500,
    dots:false,
    arrows:true,
    responsive:[
      { breakpoint:992, settings:{ slidesToShow:2 } },
      { breakpoint:576, settings:{ slidesToShow:1 } }
    ]
  });

  // Gift card slider
  $('.gift-slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    arrows:true,
    responsive:[
      { breakpoint:992, settings:{ slidesToShow:3 } },
      { breakpoint:576, settings:{ slidesToShow:2 } }
    ]
  });

  // Simple slider (Testimonials)
  $('.simple-slider').slick({
    slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    arrows:false,
    dots:true,
    responsive:[
      { breakpoint:768, settings:{ slidesToShow:1 } }
    ]
  });
});

$(document).ready(function(){
  // HERO CAROUSEL
  $('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // GALLERY SLIDER + Lightbox
  var lightbox = new SimpleLightbox('.gallery-slider a', {});
  $('.gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    responsive:[
      { breakpoint:992, settings:{ slidesToShow:2 } },
      { breakpoint:576, settings:{ slidesToShow:1 } }
    ]
  });

  // GIFT CARD SLIDER
  $('.gift-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive:[
      { breakpoint:992, settings:{ slidesToShow:3 } },
      { breakpoint:576, settings:{ slidesToShow:2 } }
    ]
  });

  // SIMPLE SLIDER (Testimonials)
  $('.simple-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    responsive:[
      { breakpoint:768, settings:{ slidesToShow:1 } }
    ]
  });
});
