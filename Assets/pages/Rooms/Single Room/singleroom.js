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


// Search Input Start
document.querySelector('#search-input').addEventListener("input", filterList);

function filterList(){
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.list-group-item');

  listItems.forEach((item) =>{
    let text = item.textContent;
    if(text.toLowerCase().includes(filter.toLowerCase())){
      item.style.display = '';
    }
    else{
      item.style.display = 'none';
    }
  })
}
// Search Input End


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


// Swiper start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 3000
  },
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
// Swiper End

