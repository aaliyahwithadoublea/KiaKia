$(document).ready(function(){
    $('.slider').slick({
        dots: true,                // Show dots for navigation
        infinite: true,            // Infinite looping
        speed: 500,                // Transition speed
        slidesToShow: 3,           // Number of slides to show at once
        slidesToScroll: 1,         // Number of slides to scroll per action
        autoplay: false,           // Disable autoplay
        arrows: true,              // Show next/prev arrows
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        adaptiveHeight: true,responsive: [
            {
              breakpoint: 1484,
              settings: {
                slidesToShow: 2, 
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});

$(document).ready(function(){
    $('.sliding').slick({
        dots: true,         
        infinite: true,   
        speed: 500,          
        slidesToShow: 3,      
        slidesToScroll: 1,        
        autoplay: true,
        autoplaySpeed: 2000,      
        arrows: true,         
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        adaptiveHeight: true ,    responsive: [
            {
              breakpoint: 1484,
              settings: {
                slidesToShow: 2, 
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("shopModal");
    const closeModal = document.querySelector(".close");

    // Close modal when clicking the close button
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
