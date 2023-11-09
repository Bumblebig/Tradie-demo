"use strict";
const slider = function () {
  const slides = document.querySelectorAll(".fig");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  setInterval(nextSlide, 8000);
};
slider();

const hamburger = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const mobNavs = document.querySelectorAll(".mobile");

hamburger.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
  setTimeout(() => {
    mobileNav.style.opacity = 1;
  }, 50);
});

overlay.addEventListener("click", function () {
  setTimeout(() => {
    mobileNav.style.opacity = 0;
  }, 20);

  setTimeout(() => {
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 80);
});

mobNavs.forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      mobileNav.style.opacity = 0;
    }, 5);

    setTimeout(() => {
      mobileNav.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 10);
  });
});

// /////////////////////////////
const serviceDesk = document.querySelector(".service-desk");
const guidesDesk = document.querySelector(".guides-desk");
const faqDesk = document.querySelector(".faq-desk");
const serviceMob = document.querySelector(".service-mobile");
const guidesMob = document.querySelector(".guides-mobile");
const faqMob = document.querySelector(".faq-mobile");

const scroll = function (id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

serviceDesk.addEventListener("click", () => {
  scroll(".values");
});
serviceMob.addEventListener("click", () => {
  scroll(".values");
});

guidesDesk.addEventListener("click", () => {
  scroll(".settings");
});
guidesMob.addEventListener("click", () => {
  scroll(".settings");
});

faqDesk.addEventListener("click", () => {
  scroll(".faqs");
});
faqMob.addEventListener("click", () => {
  scroll(".faqs");
});

document.querySelector(".learn").addEventListener("click", function () {
  scroll(".brands");
});

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
