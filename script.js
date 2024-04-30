const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
const imageList = document.querySelector(".slider-wrapper .image-list");
let currentPosition = 0;
const slideWidth = 10;
const maxPosition = 0;
let prevButton = document.getElementById("prev-slide");

prevButton.style.visibility = "hidden";

function slideNext() {
    if (currentPosition > -(imageList.children.length - 10) * slideWidth) {
        currentPosition -= slideWidth;
        updateSliderPosition();
    }
}

function slidePrevious() {
    if (currentPosition < maxPosition) {
        currentPosition += slideWidth;
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    imageList.style.transition = "transform 0.5s ease";
    imageList.style.transform = `translateX(${currentPosition}vw)`;
    
    prevButton.style.visibility = currentPosition === maxPosition ? "hidden" : "visible";
    
    document.getElementById("next-slide").style.visibility = currentPosition <= -(imageList.children.length - 10) * slideWidth ? "hidden" : "visible";
}

slideButtons.forEach(button => {
    if (button.id === "next-slide") {
        button.addEventListener("click", () => {
            slideNext();
            prevButton.style.visibility = "visible";
        });
    } else if (button.id === "prev-slide") {
        button.addEventListener("click", slidePrevious);
    }
});
