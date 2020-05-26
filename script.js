const menuButton = document.querySelector('.menu-button');
const tabletBreakpoint = 768; // pixels

// https://stackoverflow.com/questions/18477016/switching-css-classes-based-on-screen-size
// Makes hamburger and nav menu appear and disappear based on screen width and breakpoint
function responsive() { 
    $(window).on('resize', function() {
        if($(window).width() < tabletBreakpoint) {
            $('.header-nav-links').addClass('sr-only');
            $('.menu-button').removeClass('sr-only');
            $('.social-media-links').addClass('sr-only');
        }else{
            $('.header-nav-links').removeClass('sr-only');
            $('.social-media-links').removeClass('sr-only');
            $('.menu-button').addClass('sr-only');
        }
    }).resize();
}

// toggles sr-only class on header-nav-links, to be used with an event listener
function displayHeaderNavLinks() {
    let navLinks = document.querySelector('.header-nav-links').classList;
    navLinks.toggle('sr-only');
}

function main() {
    responsive();
    menuButton.addEventListener('click', displayHeaderNavLinks);
}

main();