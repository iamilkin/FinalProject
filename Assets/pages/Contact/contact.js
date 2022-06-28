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
