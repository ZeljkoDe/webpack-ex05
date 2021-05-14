import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// import SwiperCore, { Navigation } from "swiper/core";
// SwiperCore.use([Navigation]);
import "./styles/main.scss";
import bg1 from "./images/bg1.png";
import bg2 from "./images/bg2.png";
import bg3 from "./images/bg3.png";
// console.log(bg1);
const info = [
  {
    id: 0,
    title: "I want to feel what you wanted.",
    info: "Trent from punchy pint when lets get some snag. Get a dog up yamoolh piss oc pizz fdsnf codm punch slapsp. Shazza got us some scuck a sickes heaps he hesnt got a kind. As stands out like bunsh telly with as stands aut like porky. She'll be right pretty spiffy trent from punchy cab sav",
    link: "url(./images/bg1.png)",
  },
  {
    id: 1,
    title: "Donec nec fringilla elit",
    info: "Trent from punchy pint when lets get some snag. Get a dog up yamoolh piss oc pizz fdsnf codm punch slapsp. Shazza got us some scuck a sickes heaps he hesnt got a kind. As stands out like bunsh telly with as stands aut like porky. She'll be right pretty spiffy trent from punchy cab sav",
    link: "url(./images/bg2.png)",
  },
  {
    id: 2,
    title: "Sed ultricies vel tortor quis",
    info: "Trent from punchy pint when lets get some snag. Get a dog up yamoolh piss oc pizz fdsnf codm punch slapsp. Shazza got us some scuck a sickes heaps he hesnt got a kind. As stands out like bunsh telly with as stands aut like porky. She'll be right pretty spiffy trent from punchy cab sav",
    link: "url(./images/bg3.png)",
  },
];

const navLinks = document.querySelector(".nav-links");
const links = Array.from(navLinks.children);
const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelector(".dropdown--items");
const hamburger = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const header = document.querySelector("header");
const naslov = document.querySelector(".naslov");
const desc = document.querySelector(".desc");
const btnLeft = document.querySelector(".left");
const btnRignt = document.querySelector(".right");
const acc = document.querySelectorAll(".accordion--item");
const steps = document.querySelectorAll(".steps ul li");
const nextStep = document.querySelector(".next-step");
const forms = document.querySelector(".forms");
let current = 0;

navLinks.addEventListener("click", (e) => {
  const clicked = e.target.closest("li");
  links.forEach(function (link) {
    link.classList.remove("active");
  });
  clicked.classList.add("active");
  if (clicked.classList.contains("dropdown")) {
    dropdownItems.classList.toggle("active");
  } else {
    dropdownItems.classList.remove("active");
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeNav.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// slider
let activeSlide = 0;
if (btnLeft) {
  btnLeft.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide > info.length - 1) {
      activeSlide = 0;
    }
    setAndFind();
  });
}
if (btnRignt) {
  btnRignt.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = info.length - 1;
    }
    setAndFind();
  });
}

const setAndFind = () => {
  const id = info.filter((slika) => slika.id === activeSlide);
  header.style.backgroundImage = id[0].link;
  naslov.innerHTML = id[0].title;
  desc.innerHTML = id[0].info;
};

// accordion
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// resources
if (nextStep) {
  nextStep.addEventListener("click", () => {
    let arr = forms.children;
    current++;
    for (let i = 0; i < arr.length; i++) {
      if (current === i) {
        steps[current].classList.add("active");
        steps[current].previousElementSibling.classList.add("active2");
        arr[i].classList.add("active");
        arr[i].previousElementSibling.classList.remove("active");
      }
      if (current === arr.length - 2) {
        nextStep.innerHTML = "RETURN HOME";
      }
      if (current === arr.length - 1) {
        nextStep.href = "index.html";
      }
    }
  });
}

// lead text slider
const lead = document.querySelectorAll(".lead");
const rightBtnLead = document.querySelector(".right-btn-lead");
const leftBtnLead = document.querySelector(".left-btn-lead");
let clicked = 0;

if (rightBtnLead) {
  rightBtnLead.addEventListener("click", () => {
    clicked++;
    if (clicked > lead.length - 1) {
      clicked = 0;
    }
    setLeadSlide();
  });
}
if (leftBtnLead) {
  leftBtnLead.addEventListener("click", () => {
    clicked--;
    if (clicked < 0) {
      clicked = lead.length - 1;
    }
    setLeadSlide();
  });
}
const setLeadSlide = () => {
  lead.forEach((l, i) => {
    if (i === clicked) {
      l.classList.add("active");
    } else {
      l.classList.remove("active");
    }
  });
};

// swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1924: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
