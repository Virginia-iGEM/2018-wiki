// Code courtesy of Mohamed Hasan
// https://codepen.io/Mhmdhasan/pen/mAdaQE

$(document).ajaxStop(function () {
    
    'use strict';
    
    var c, currentScrollTop = 0,
        navbar = $('header');
    var hovered = false;

    navbar.hover(function() {
        hovered = true;
    },
                 function() {
                     hovered = false;
                 });

    // Handle hiding the navbar when scrolling
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        
        currentScrollTop = a;
        
        if (c < currentScrollTop && a > b + b && navbar && !hovered) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    // Hamburger menu button for mobileview
    var openMenu = function () {
        navbar = $('.navbar');
        navbar.toggleClass('expanded');
    };

    $('header .navbar .menubutton').click(openMenu);
});

