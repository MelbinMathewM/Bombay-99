window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("img4");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}