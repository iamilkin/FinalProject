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


// Calculator Start
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 10);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});
// Calculator End


// Slider Photo
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: false,
  },
});

// Slider Testimonials
var swiper2 = new Swiper("#myFeedback", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".testimonialPagination2",
    clickable: true,
  },
});

// Hotel API Start
const hotelapi = document.querySelector(".welcomeHotel");

async function getHotel() {
  let newArray = [];
  let response = await axios.get(
    "https://ilkin-final-default-rtdb.firebaseio.com/hotel.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
// axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/hotel.json")

getHotel().then((res) => {
  res.map((item) => {
    hotelapi.innerHTML += `
    <div class="swiper-slide">
                <div class="sliderPhotos">
                    <div class="sliderPhoto1">
                      <figure>
                        <img src="${item.img}" alt=""/>
                      </figure>
                      <div class="ourServicesText">
                        <h2>${item.header}</h2>
                        <p>${item.subtitle}</p>
                      </div>
                    </div>
                  </div>
              </div>
    `;
  });
});

// Hotel API End

// Rooms Api Start
const roomCards = document.querySelector(".roomCards");

async function getRoomCard() {
  let newArray = [];
  let response = await axios.get(
    "https://ilkin-final-default-rtdb.firebaseio.com/rooms.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
// axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/rooms.json");

getRoomCard().then((res) => {
  res.map((item) => {
    roomCards.innerHTML += ` 
    <div class="roomCard">
    <div class="roomCardPhoto">
        <a href="/Rooms/rooms.html">
            <img src="${item.img}" alt="">
        </a>
    </div>
    <div class="roomCardDescription">
        <a href="/Rooms/rooms.html">
            <h4>${item.header}</h4>
        </a>
        <div class="roomCardDescriptionPrice">
            <h5>${item.price}</h5>
            <span>${item.night}</span>
        </div>
        <hr>
        <a href="/Rooms/rooms.html">${item.detail}
        </a>
    </div>
</div>
    `;
  });
});
// Rooms Api End

// Testimonials start
const singleSlide = document.querySelector(".sliderAPI");

async function getTestiCard() {
  let newArray = [];
  let response = await axios.get(
    "https://ilkin-final-default-rtdb.firebaseio.com/testimonials.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
// axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/testimonials.json")

getTestiCard().then((res) => {
  res.map((item) => {
    singleSlide.innerHTML += `
    <div class="swiper-slide">
      <div class="feedback">
          <div  class="feedbackPhoto">
              <figure>
                  <img src="${item.img}" alt="">
              </figure>
          </div>
          <p>${item.paragraph}</p>
          <h5>${item.title}</h5>
          <span>${item.speciality}</span>
      </div>
    </div>
    `;
  });
});

// Testimonials End

// BLog Api Start
const blog = document.querySelector(".blogCards");

async function getBlogCard() {
  let newArray = [];
  let response = await axios.get(
    "https://ilkin-final-default-rtdb.firebaseio.com/blog.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}
// axios.delete("https://ilkin-final-default-rtdb.firebaseio.com/blog.json")

getBlogCard().then((res) => {
  res.map((item) => {
    blog.innerHTML += ` 
    <div class="blogCard">
    <figure>
        <a href="/Single%20Blog/single.html">
          <img src="${item.img}" alt="">
        </a>
    </figure>
<a href="/Single%20Blog/single.html">${item.header}</a>
<div class="blogFeedback">
    <a href="/Single%20Blog/single.html"><span>${item.date}</span></a>
    <a href="/Single%20Blog/single.html"><span>${item.admin}</span></a>
    <a href="/Single%20Blog/single.html"><span>${item.comments}</span></a>
</div>
</div>
            `;
  });
});
// BLog Api End

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
