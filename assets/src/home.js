leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
imgDisplay = document.getElementById("imageDisplay");
imgList = document.getElementById("imageList")

var direction = 0;
var pos = 0;
var p = 0;
const scrollLeft = () => {
    p -= ((imgList.clientWidth - window.innerWidth) / 4)
    pos -= 1;
    imgDisplay.scrollTo({
        left:p,
        behavior: "smooth",
    })
    console.log("Go Left", pos, p, imgDisplay.scrollLeft);
}

const scrollRight = () => {
    p += ((imgList.clientWidth - window.innerWidth) / 4)
    pos += 1;
    imgDisplay.scrollTo({
        left:p + ((imgList.clientWidth - window.innerWidth) / 4),
        behavior: "smooth",
    })
    console.log("Go Right", pos, p, imgDisplay.scrollLeft);
}

setInterval(() => {
    if (pos <= 0) {
        direction = 0;
    } else if (pos >= 4) {
        direction = 1;
    }
    if(direction == 0) scrollRight();
    else scrollLeft();
    
}, 2000)

leftButton.addEventListener("click", scrollLeft)
rightButton.addEventListener("click", scrollRight)