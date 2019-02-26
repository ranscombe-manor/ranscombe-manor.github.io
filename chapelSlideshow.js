var curIndex = 0,
    imgDuration = 4000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'chapelTop/7livingArea.webp',
        'chapelTop/1viewFromPond.webp',
        'chapelTop/2bothWindows.webp',
        'chapelTop/3viewOverLawn.webp',
        'chapelTop/4viewFromParterre.webp',
        'chapelTop/6kitchenIsland.webp']

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
