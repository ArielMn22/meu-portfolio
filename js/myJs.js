$(".progress-bar1").loading();

// Insert CSS Function

// function injectStyles(rule) {
//     var div = $("<div />", {
//       html: '&shy;<style>' + rule + '</style>'
//     }).appendTo("body");    
// }

var botao = document.getElementById("menuBotao");
var menu = document.getElementById("menuTopo");

botao.onclick = function () {
    menu.classList.toggle("escondido-responsive");
};

// Smooth Scrolling

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Change header color

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            $(".sideBar").addClass("bg-black");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".sideBar").removeClass("bg-black");
        }
    });
});

// Open / Close side menu

// var side_menu_button = document.getElementById("openCloseButton");
// var side_menu_itself = document.getElementById("menuTopo");

// side_menu_button.onclick = function () {
//     injectStyles(".sideBar {width: 3vw;}");
// };


$("#openCloseButton").click(function () {
    $("#openCloseButton").toggleClass("rotate-button");
    $(".sideBar").toggleClass("retrair");
    $(".menu li a span").toggleClass("esconder");
    $(".right-sided").toggleClass("expandir");
    $(".social-networks").toggleClass("esconder");
});