//
// Slider on the about page
//
let slider = document.querySelector(".slider-core");
let leftArrow = document.querySelector(".slider-arrow-left");
let rightArrow = document.querySelector(".slider-arrow-right");
let sliderInside = document.querySelector(".slider-items");
let sliderItems = document.querySelectorAll(".slider-item");

//Measurements for slider
let elementMargin = window.getComputedStyle(sliderItems[0]);
let offsetAmount = sliderItems[0].offsetWidth + parseInt(elementMargin.marginRight);
let containerWidth = document.querySelector(".slider-container").offsetWidth;
let count = 0;

console.log(containerWidth);
leftArrow.addEventListener("click", function(){
    if(count != -0){
        count = count + 1;
    } else if(containerWidth < 350) {
        count = -5;
    } 
    else if(containerWidth > 350){
        count = -4;
    }
    let currentPosition = count * offsetAmount;
    sliderInside.style.left = `${currentPosition}px`;
});

rightArrow.addEventListener("click", function(){
    if((containerWidth > 350 && count != -4) || (containerWidth < 350 && count != -5)){
        count = count - 1;
    } else {
        count = 0;
    }
    let currentPosition = count * offsetAmount;
    sliderInside.style.left = `${currentPosition}px`;
});