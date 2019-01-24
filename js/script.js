// $(window).on("scroll", function() {
//
//   function myFunction(x) {
//     if (x.matches) { // If media query matches
//       if ($(window).scrollTop() > 50) {
//         $(".header").addClass("active");
//         $(".logo img").attr("src", "images/logo_black.png");
//         $(".icon a").css("color", "black");
//         // $(".nav_mu a").css("color", "black");
//         $(".overlay").css("background", "White");
//         $("#closebtn").css("color", "black");
//       } else {
//         //remove the background property so it comes transparent again (defined in your css)
//         $(".header").removeClass("active");
//         $(".logo img").attr("src", "images/logo_white_text.png");
//         $(".icon a").css("color", "black");
//         $(".nav_mu a").css("color", "White");
//         $(".overlay").css("background", "black");
//         $("#closebtn").css("color", "white");
//
//       }
//     } else {
//       if ($(window).scrollTop() > 50) {
//         $(".header").addClass("active");
//         $(".logo img").attr("src", "images/logo_black.png");
//         $(".icon a").css("color", "black");
//         $(".nav_mu a").css("color", "black");
//         // $(".overlay").css("background", "White");
//         // $("#closebtn").css("color", "black");
//       } else {
//         //remove the background property so it comes transparent again (defined in your css)
//         $(".header").removeClass("active");
//         $(".logo img").attr("src", "images/logo_white_text.png");
//         $(".icon a").css("color", "black");
//         $(".nav_mu a").css("color", "black");
//         // $(".overlay").css("background", "black");
//         // $("#closebtn").css("color", "white");
//
//       }
//     }
//   }
//
//   var x = window.matchMedia("(max-width: 500px)")
//
//   myFunction(x) // Call listener function at run time
//
//   x.addListener(myFunction) // Attach listener function on state changes
//
//
//
// });


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}




// Smooth scroll


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// // Slider
//
// (function () {
// 	'use strict';
// 	var slides = document.querySelectorAll('.slideitem'),
// 		 button = document.getElementById('button'),
// 		 arrows = document.querySelectorAll('.lnr'),
// 		 carouselCount = 0,
// 		 scrollInterval,
// 		 interval = 5000;
//
// 	arrows[0].addEventListener('click', function (e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		carouselCount -= 100;
// 		slider();
// 		if (e.type !== 'autoClick') {
// 			clearInterval(scrollInterval);
// 			scrollInterval = setInterval(autoScroll, interval);
// 		}
// 	});
// 	arrows[1].addEventListener('click', sliderEvent);
// 	arrows[1].addEventListener('autoClick', sliderEvent);
//
// 	function sliderEvent(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		carouselCount += 100;
// 		slider();
// 		if (e.type !== "autoClick") {
// 			clearInterval(scrollInterval);
// 			scrollInterval = setInterval(autoScroll, interval);
// 		}
// 	}
//
// 	function slider() {
// 		switch (carouselCount) {
// 			case -100:
// 				carouselCount = 0;
// 				break;
// 			case 300:
// 				carouselCount = 0;
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(carouselCount);
// 		for (var i = 0; i < slides.length; i += 1) {
// 			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
// 		}
// 	}
//
// 	// create new Event to dispatch click for auto scroll
// 	var autoClick = new Event('autoClick');
// 	function autoScroll() {
// 		arrows[1].dispatchEvent(autoClick);
// 	}
//
// 	// set timing of dispatch click events
// 	scrollInterval = setInterval(autoScroll, interval);
//
// })();
