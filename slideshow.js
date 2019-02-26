var curIndex = 0,
    imgDuration = 4000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'topslideshow/20wisteria.webp',
        'topslideshow/02parterre.webp',
        'topslideshow/01arialview.webp',
        'topslideshow/09pinkflower.webp',
        'topslideshow/mainImage.webp',
        'topslideshow/lounge2.webp',
        'topslideshow/10ivy.webp',
        'topslideshow/14ivy.webp',
        'topslideshow/15fern.webp',
        'topslideshow/19wisteria.webp'];


function buildSlideShow(arr) {
    for (i = 0; i < arr.length; i++) {
        var img = document.createElement('img');
        img.className = "sliderimg";
        img.src = arr[i];
        slider.appendChild(img);
    }
}


function slideShow() {
    function fadeIn(e) {
        e.className = "fadeIn";
    };
    function fadeOut(e) {
        e.className = "";
    };

    fadeOut(slides[curIndex]);

    curIndex++;
    if (curIndex == slides.length) {
        curIndex = 0;
    }

    fadeIn(slides[curIndex]);

    setTimeout(slideShow, imgDuration);
};


buildSlideShow(imgArray);
slideShow();
