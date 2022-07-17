import "./styles.css";

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const slidesContainer = document.querySelector("#slides-container");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let isMoving = false;

const handleBtnClick = (e) => {
  if (isMoving) return;
  isMoving = true;
  e.currentTarget.id === "prev" ? currentIndex-- : currentIndex++;
  slidesContainer.style.transform = `translateX(-${
    currentIndex * slides[0].clientWidth
  }px)`;
  removeDisabledAttribute([prevBtn, nextBtn]);
  currentIndex === 0 && addDisabledAttribute([prevBtn]);
};

const removeDisabledAttribute = (els) =>
  els.forEach((el) => el.removeAttribute("disabled"));
const addDisabledAttribute = (els) =>
  els.forEach((el) => el.setAttribute("disabled", "true"));

prevBtn.addEventListener("click", handleBtnClick);
nextBtn.addEventListener("click", handleBtnClick);

slidesContainer.addEventListener("transitionend", () => (isMoving = false));

document
  .querySelectorAll(".slide img")
  .forEach((img) => (img.ondragstart = () => false));

const slideObserver = new IntersectionObserver(
  (slide) => {
    if (slide[0].isIntersecting) {
      addDisabledAttribute([nextBtn]);
    }
  },
  { threshold: 0.75 }
);

slideObserver.observe(slides[slides.length - 1]);
