/*----- Navbar Transparent to solid */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid')
        } else {
            $('.navbar').removeClass('solid');
        }
    })
})

// CLOSE MOBILE NAV ON CLICK 
$(document).ready(function() {
    $(document).click(function(event) {
        var clickOver = $(event.target)
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickOver.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }

    })
})

// SMOOTH SCROLLING TO LINKS

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash
            });
        }
    });

});

// bouncing arrow
$(document).ready(function() {
    $(window).scroll(function() {
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250)
    })
})

// Meet the team section 
$(document).ready(function() {
    $("#team-slider").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});

// Client section 
$(document).ready(function() {
    $("#clients-slider").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 1700,
        loop: true,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },

        }
    });
});

// Skill section counter 
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1800
    });
});

// back to the top button 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut()
        }
    });
});


// Read More button 
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline"
        btnText.innerHTML = "Click to read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Click to read less";
        moreText.style.display = "inline";
    }
}