var curIndex = 0,
    imgDuration = 2500,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'topslideshow/02parterre.jpg',
        'topslideshow/mainImage.jpg',
        'topslideshow/01arialview.jpg',
        'topslideshow/03fountain.jpg',
        'topslideshow/09pinkflower.jpg',
        'topslideshow/10ivy.jpg',
        'topslideshow/14ivy.jpg',
        'topslideshow/15fern.jpg',
        'topslideshow/19wisteria.jpg',
        'topslideshow/20wisteria.jpg'];


//
// Dynamically add each image frame into the dom;
//
function buildSlideShow(arr) {
    for (i = 0; i < arr.length; i++) {
        var img = document.createElement('img');
        img.className = "sliderimg";
        img.src = arr[i];
        slider.appendChild(img);
    }
}

//
// Our slideshow function, we can call this and it flips the image instantly, once it is called it will roll
// our images at given interval [imgDuration];
//
function slideShow() {
    function fadeIn(e) {
        e.className = "fadeIn";
    };
    function fadeOut(e) {
        e.className = "";
    };
    // first we start the existing image fading out;

    fadeOut(slides[curIndex]);

    // then we start the next image fading in, making sure if we are at the end we restart!
    curIndex++;
    if (curIndex == slides.length) {
        curIndex = 0;
    }

    fadeIn(slides[curIndex]);

    // now we are done we recall this function with a timer, simple.

    setTimeout(slideShow, imgDuration);
};


// first build the slider, then start it rolling!

buildSlideShow(imgArray);
slideShow();
