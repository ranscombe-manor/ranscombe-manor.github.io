var curIndex = 0,
    imgDuration = 3000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'slideshow/mainImage.jpg',
        'slideshow/mainImage.jpg',
        'slideshow/01arialview.jpg',
        'slideshow/02parterre.jpg',
        'slideshow/03fountain.jpg',
        'slideshow/04workshopview.jpg',
        'slideshow/05frontdoor.jpg',
        'slideshow/06frontdoor.jpg',
        'slideshow/07viewfromhill.jpg',
        'slideshow/08pond.jpg',
        'slideshow/09pinkflower.jpg',
        'slideshow/10ivy.jpg',
        'slideshow/11wisteria.jpg',
        'slideshow/12rose.jpg',
        'slideshow/13rose.jpg',
        'slideshow/14ivy.jpg',
        'slideshow/15fern.jpg',
        'slideshow/16rose.jpg',
        'slideshow/17iris.jpg',
        'slideshow/18rose.jpg',
        'slideshow/19wisteria.jpg',
        'slideshow/20wisteria.jpg'];


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
