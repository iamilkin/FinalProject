// Scroll Header Start
const header = document.querySelector(".header");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
// Scroll Header End

// Toggle Start
$(document).ready(function(){
  $('#icon').click(function(){
      $('ul').toggleClass('show')
  })
})
// Toggle End

// Instagram Start
function makeFullSc() {
    var divObj = document.getElementById("theImage");
  //Use the specification method before using prefixed versions
 if (divObj.requestFullscreen) {
   divObj.requestFullscreen();
 }
 else if (divObj.msRequestFullscreen) {
   divObj.msRequestFullscreen();            
 }
 else if (divObj.mozRequestFullScreen) {
   divObj.mozRequestFullScreen();
 }
 else if (divObj.webkitRequestFullscreen) {
   divObj.webkitRequestFullscreen();
 } else {
   console.log("Fullscreen API is not supported");
 } 

}
function makeFullScr() {
    var divObj = document.getElementById("theGirl");
  //Use the specification method before using prefixed versions
 if (divObj.requestFullscreen) {
   divObj.requestFullscreen();
 }
 else if (divObj.msRequestFullscreen) {
   divObj.msRequestFullscreen();            
 }
 else if (divObj.mozRequestFullScreen) {
   divObj.mozRequestFullScreen();
 }
 else if (divObj.webkitRequestFullscreen) {
   divObj.webkitRequestFullscreen();
 } else {
   console.log("Fullscreen API is not supported");
 } 

}
function makeFullScre() {
    var divObj = document.getElementById("theSurf");
  //Use the specification method before using prefixed versions
 if (divObj.requestFullscreen) {
   divObj.requestFullscreen();
 }
 else if (divObj.msRequestFullscreen) {
   divObj.msRequestFullscreen();            
 }
 else if (divObj.mozRequestFullScreen) {
   divObj.mozRequestFullScreen();
 }
 else if (divObj.webkitRequestFullscreen) {
   divObj.webkitRequestFullscreen();
 } else {
   console.log("Fullscreen API is not supported");
 } 

}
function makeFullScree() {
    var divObj = document.getElementById("theRoom");
  //Use the specification method before using prefixed versions
 if (divObj.requestFullscreen) {
   divObj.requestFullscreen();
 }
 else if (divObj.msRequestFullscreen) {
   divObj.msRequestFullscreen();            
 }
 else if (divObj.mozRequestFullScreen) {
   divObj.mozRequestFullScreen();
 }
 else if (divObj.webkitRequestFullscreen) {
   divObj.webkitRequestFullscreen();
 } else {
   console.log("Fullscreen API is not supported");
 } 

}
function makeFullScreen() {
    var divObj = document.getElementById("thePhoto");
  //Use the specification method before using prefixed versions
 if (divObj.requestFullscreen) {
   divObj.requestFullscreen();
 }
 else if (divObj.msRequestFullscreen) {
   divObj.msRequestFullscreen();            
 }
 else if (divObj.mozRequestFullScreen) {
   divObj.mozRequestFullScreen();
 }
 else if (divObj.webkitRequestFullscreen) {
   divObj.webkitRequestFullscreen();
 } else {
   console.log("Fullscreen API is not supported");
 } 

}
// Instagram End


// Rooms Price Start
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
// Rooms Price End