const navbar = document.querySelector('.navbar');
const scrollWatcher = document.createElement('div');
const menu_Btn = document.querySelector('.hamburger');
const mobile_Menu = document.querySelector('.mobile-nav');

menu_Btn.addEventListener('click', function () {
  menu_Btn.classList.toggle('is-active');
  mobile_Menu.classList.toggle('is-active');
})

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  navbar.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)
// Swiper Slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let availableKeywords = [
  "Vancouver Canada, B.C.",
  "Vancouver Island B.C.",
  "Kelown B.C.",
  "Toronto Ontario",
  "Wistler B.C.",
  "Ontario",
  "Montreal Canada",
  "Edmonton B.C.",
  "Calgary B.C.",
  "Alberta B.C.",
  "Banff B.C",
  "Tafino",
  "The Yukon",
  "Quebec City",
  "St John",
  "Ottawa ",
  "Victoria B.C.",
  "Manitoba ",
  "Nova Scotia",
  "New Brunswick",
  "Northwest Territories",
  "Winnipeg ",
  "crofton B.C.",
];

const resultsBox = document.querySelector(".results-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultsBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}

