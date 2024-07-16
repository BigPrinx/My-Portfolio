document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const navbar = document.querySelector('.navbar');

    // Toggle the navbar on button click
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close the navbar when a nav link is clicked
    navbar.querySelectorAll('a').forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
});

$(document).ready(function() {
    // Smooth scrolling using jQuery easing
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
