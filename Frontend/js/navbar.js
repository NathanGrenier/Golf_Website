var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var logoHeight = 128;
var logoWidth = 128;
var scaleFactor = 1.5;
var ticks = 0;
var transformed = false;

window.onscroll = function() {modifyNavbar()};

function newNav() {
    if (document.documentElement.scrollTop > 154) {
        navbar.style.opacity = 0.85;
        logo.style.height = (logoHeight / scaleFactor) + "px";
        logo.style.width = (logoWidth / scaleFactor) + "px";
        transformed = true;
    }
}

function oldNav() {
    if (document.documentElement.scrollTop < 154 && transformed == false) {
        navbar.style.opacity = 1;
        logo.style.height = logoHeight + "px";
        logo.style.width = logoWidth + "px";
    }
}

function modifyNavbar() {
    //console.log(document.documentElement.scrollTop);
    if (transformed) {
        setTimeout(revert, 250);
    }

    oldNav();
    newNav();
}

setInterval(oldNav, 5)

function revert() {
    transformed = false;
}