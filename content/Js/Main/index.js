$(window).on("load", function ()
{
       $("#lood").slideUp("slow", function()
    {  $("body").css("overflow","visible")
  });
})
$('.owl-carousel').owlCarousel({
  loop:true,
  items:1,
  nav:true,
  autoplay:true,
  smartSpeed:800,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
var typed = new Typed('.element', {
strings:["World's Favourite Food" , "We Are Number 1#"],
typeSpeed: 25,
backSpeed: 25,
backDelay: 500,
startDelay: 1000,
loop: true,
loopCount: Infinity,
showCursor: false
});
(function ($) {
  "use strict";
  /*--------------------------------------
    Counter Up Active
  ----------------------------------------*/
  $('.counter').counterUp({
    delay:10,
    time:2000,
  }); 
  })(jQuery);	
let Navcontinue = $("#Navcontinue").offset().top;
  $(window).scroll(function()
  {  
     let knowScroll = $(window).scrollTop()
      if (knowScroll > Navcontinue)
      {
        
         $("nav").removeClass("bg-transparent");
         $("nav").addClass("bg-info");     
        $(".nav-link").css("color", "rgb(10, 106, 138)")
        
      //  $(".nav-link").hover(function () 
      //   {
      //    $(this).css("color", "white");
      //   })
        
 
      }
      else
      {
        $("nav").removeClass("bg-info");
        $("nav").addClass("bg-transparent");
        $(".nav-link").css("color", "rgb(164,180,192)")
        $("#activee").css("color", "white")
      //  $(".nav-link").hover(function () 
      //  {
      //   $(this).css("color", "rgb(89, 192, 226)");
      //  })

       
        
      }
  })
  new WOW().init();
    // $('html, body').animate({scrollTop:1000}, 800);
    const portfolio = document.querySelector('.portfolio-gallery'),
    portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
    portfolioCats = document.querySelectorAll('.portfolio-cats > li');
    let parentWidth = portfolio.offsetWidth,
    windowWidth = window.innerWidth;
    portfolioCats.forEach(cat => {
    cat.addEventListener('pointerdown', function() {
    const dataFilter = this.dataset.filter;
      const el = [];
      if (dataFilter === '*') {
          positionItems(portfolioItems);
      } else {
          portfolioItems.forEach(item => {
              if (item.dataset.filter == dataFilter) {
                  el.push(item);
              } else {
                  item.style.cssText = 'transform: scale(0.1); opacity: 0;';
              }
          });
          positionItems(el);
      }
  });
});
// Count Number of Items Per Row
function countRowsItems() {
  let rowItems = 0;
  if (windowWidth <= 768) {
      rowItems = 1;
  } else if (windowWidth <= 992) {
      rowItems = 2;
  } else {
      rowItems = 3;
  }
  return rowItems;
}
// Position each item in its place
function positionItems(items) {
  let rowItems = countRowsItems();
  let y = 0;
  let x = 0;
  let itemCount = 0;
  items.forEach((item, i) => {
      item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
      x++;
      if (x%rowItems == 0) {
          y++;
          x = 0;
      }
      itemCount = i;
  });
  portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}
positionItems(portfolioItems);
window.addEventListener('resize', () => {
  parentWidth = portfolio.offsetWidth;
  windowWidth = window.innerWidth;
  positionItems(portfolioItems);
});


//  $(".nav-link").hover(function () 
//  {
//   $(this).css("color", "rgb(89, 192, 226)");
//  })



//  $(".nav-link").hover(function () 
//  {
//   $(this).css("color", "white");
//  })

$("#Contact-form").validate({
    rules:{
      username:{required:true , username:true},
      messages:{username:{required: 'Enter Your Name'}} ,
       email:{required:true , email:true},
      messages:{email:{required: 'Enter Your Mail' , email:'Enter Your Right Mail'}} ,
      password:{required:true , password:true},
      messages:{password:{required: 'Enter Your Mail' , password:'Enter Your Right Mail'}} ,
    }
});

// $(function(){

//   $("#Contact-form").validate({   
//           rules:{
//               email:{
//                   required:true,
//                   email:true   
//               },
//               pass:"required",
              
//           },
//           messages:{
//               email:{
//                   required:"Please Enter an Email Adress."
  
//               }
//           }
  
  
//       });
  
  
  
  
//   });  
 $("#Btnsend").click(function()
  {
    if( $("input").val() == "")
    {
     $("input").addClass("is-invalid");   
    }
    else
    {
      $("input").addClass("is-valid");  
    }
  })



$('.owl-second').owlCarousel({
  loop:true,
  items:1,
  nav:true,
  autoplay:true,
  smartSpeed:800,
  nav:true,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})