const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");

let slideNumber = 1;
const images = document.querySelectorAll(".image");

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
  slideNumber--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${images.length - 1 * 100}%)`;
  slideNumber = images.length;
};

right.addEventListener("click", () => {
  slideNumber < images.length ? nextSlide() : getFirstSlide();
});
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
});
