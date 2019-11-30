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

// 
// Popup on the about page
//
const myVM = (() => {
    let triggerButtons = document.querySelectorAll(".slider-item");
    let lightBox = document.querySelector(".technology-popup");
  
    function parseUserData(object) {
        let targetContainer = lightBox.querySelector(".technology-popup-container");
        let targetHeading = targetContainer.querySelector("h2");
        let targetImage = targetContainer.querySelector("img");
        let targetDesc = targetContainer.querySelector("p");
  
        targetHeading.innerHTML = object.tech_name;
        targetImage.src =`images/${object.tech_img}`;
        targetDesc.innerHTML = object.tech_desc;
        lightBox.classList.add("technology-popup-show");
    }
  
    function getUserData(e) {
      e.preventDefault();
      let url = `/technology/${this.getAttribute("href")}`;
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          parseUserData(data);
        })
        .catch(err => console.log(err));
    }
  
    triggerButtons.forEach(button => button.addEventListener("click", getUserData));
  
    lightBox.querySelector(".close-btn").addEventListener("click", function() {
      lightBox.classList.remove("technology-popup-show");
    });
  })()