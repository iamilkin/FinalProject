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


// Search Input start
document.querySelector("#search-input").addEventListener("input", filterList);

function filterList() {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
// Search Input End


// Single Blog Api Start
const singleBlog = document.querySelector(".blogAboutFromApi");

async function getNews() {
  let newArray = [];
  let response = await axios.get(
    // "https://ilkin-final-default-rtdb.firebaseio.com/singleblog.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
// axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/singleblog.json");

getNews().then((res) => {
  res.map((item) => {
    singleBlog.innerHTML += `
              <div class="blogAboutDesc">
              <h2>${item.headline}</h2>
                    <p>${item.words}</p>
                    <p><img src="${item.img}" alt=""></p>
              </div>
            `;
  });
});
// Single Blog API ENd


// Recent Blog Start
const recentBlog = document.querySelector(".blogCards");

async function getRecentBlog() {
  let newArray = [];
  let response = await axios.get(
    "https://ilkin-final-default-rtdb.firebaseio.com/recentblog.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/recentblog.json")


getRecentBlog().then((res) => {
  res.map((item) => {
    recentBlog.innerHTML += `
     <div class="blogCard">
         <figure>
             <a href=""><img src="${item.img}" alt=""></a>
         </figure>
         <div class="blogDescription">
             <a href="">${item.header}</a>
             <div class="blogFeedback">
                 <a href=""><span><i class=" fa fa-solid fa-calendar"></i>${item.time}</span></a>
                 <a href=""><span><i class="fa fa-solid fa-user"></i>${item.admin}</span></a>
                 <a href=""><span><i class="fa fa-duotone fa-comment"></i>${item.comments}</span></a>
             </div>
         </div>
     </div>
    `;
  });
});
// Recent Blog End


// Instagram start
function makeFullSc() {
  var divObj = document.getElementById("theImage");
  //Use the specification method before using prefixed versions
  if (divObj.requestFullscreen) {
    divObj.requestFullscreen();
  } else if (divObj.msRequestFullscreen) {
    divObj.msRequestFullscreen();
  } else if (divObj.mozRequestFullScreen) {
    divObj.mozRequestFullScreen();
  } else if (divObj.webkitRequestFullscreen) {
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
  } else if (divObj.msRequestFullscreen) {
    divObj.msRequestFullscreen();
  } else if (divObj.mozRequestFullScreen) {
    divObj.mozRequestFullScreen();
  } else if (divObj.webkitRequestFullscreen) {
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
  } else if (divObj.msRequestFullscreen) {
    divObj.msRequestFullscreen();
  } else if (divObj.mozRequestFullScreen) {
    divObj.mozRequestFullScreen();
  } else if (divObj.webkitRequestFullscreen) {
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
  } else if (divObj.msRequestFullscreen) {
    divObj.msRequestFullscreen();
  } else if (divObj.mozRequestFullScreen) {
    divObj.mozRequestFullScreen();
  } else if (divObj.webkitRequestFullscreen) {
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
  } else if (divObj.msRequestFullscreen) {
    divObj.msRequestFullscreen();
  } else if (divObj.mozRequestFullScreen) {
    divObj.mozRequestFullScreen();
  } else if (divObj.webkitRequestFullscreen) {
    divObj.webkitRequestFullscreen();
  } else {
    console.log("Fullscreen API is not supported");
  }
}
// Instagram end