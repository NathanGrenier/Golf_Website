var bar = document.getElementById("progress-bar");
var width = 0;

var imageURL = [];
var imageIndex = 0;

function getImages() {
    //var fs = require('fs');
    //var imageURL = fs.readdirSync('css/media/');
    //imageURL.push(fs.readdirSync('css/media/'));
}

function move() {
    //getImages();
    setInterval(frame, 10)
}

function frame() {
    if (width >= 100) {
        //changeImage();
        width = 0;
    } else {
        width+= 0.15;
        bar.style.width = width + "%"
    }
}

function changeImage() {
    var image = document.getElementsByClassName("image-display");
    image.style.backgroundImage = imageURL[imageIndex];
    imageIndex++;
}