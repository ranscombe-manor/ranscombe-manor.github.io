var curIndex = 0,
    imgDuration = 4000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'chapelTop/7livingArea.jpeg',
        'chapelTop/1viewFromPond.jpeg',
        'chapelTop/2bothWindows.jpeg',
        'chapelTop/3viewOverLawn.jpeg',
        'chapelTop/4viewFromParterre.jpeg',
        'chapelTop/6kitchenIsland.jpeg']

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
