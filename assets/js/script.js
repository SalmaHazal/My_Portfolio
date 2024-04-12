$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Salma EL HAZAL";
            $("#favicon").attr("href", "assets/images/avatar.png");
        }
        else {
            document.title = "Come Back To Portfolio 🙋‍♀️";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Cloud computing" , "frontend development", "backend development", "DevOps", "UI / UX Design", "Problem Solving"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->



// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat




/* SCROLL HOME */
ScrollReveal().reveal('.home .content h3', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .content p', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
    // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .content .btn', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

ScrollReveal().reveal('.home .image', {
    delay: 400, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
    // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .linkedin', {
    delay: 600, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .github', {
    delay: 600, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .instagram', {
    delay: 600, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.home .dev', {
    delay: 600, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });



/* SCROLL ABOUT */
ScrollReveal().reveal('.about .content h3', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.about .content .tag', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.about .content p', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.about .content .box-container', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.about .content .resumebtn', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });


/* SCROLL SKILLS */
ScrollReveal().reveal('.skills .container', {
    interval: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.skills .container .bar', {
    delay: 400, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

/* SCROLL EDUCATION */
ScrollReveal().reveal('.education .box', {
    interval: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

/* SCROLL PROJECTS */
ScrollReveal().reveal('.work .box', {
    interval: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

/* SCROLL EXPERIENCE */
ScrollReveal().reveal('.experience .timeline', {
    delay: 400, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.experience .timeline .container', {
    interval: 400, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

/* SCROLL work */
  ScrollReveal().reveal('.work .box', {
    interval: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });

/* SCROLL CONTACT */
ScrollReveal().reveal('.contact .container', {
    delay: 400, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
ScrollReveal().reveal('.contact .container .form-group', {
    delay: 200, // Delay in milliseconds
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Origin of the animation
    distance: '80px', // Distance of the animation
     // Easing function
    mobile: true, // Whether to reveal on mobile devices
    reset: true // Whether to reset the animation when element is not in view
  });
  
// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->

// emailjs to mail contact form data

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_mk4awon', 'contact_form', this)
          .then(() => {
              alert('SUCCESS!');
          }, (error) => {
              alert('FAILED...', error);
          });
  });
}










