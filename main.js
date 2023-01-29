// lear
// San

window.addEventListener("DOMContentLoaded", () => {
  // Removing Blur From Body
  document.body.classList.remove("blurred");

  const switchBtn = document.querySelector(".switch-btn");

  const offerBtn = document.querySelector(".offer-btn");
  const hiddenOffers = document.querySelectorAll(".hidden-offer");
  let offerMode = false;

  const container = document.querySelector(".container");
  const sliderBtns = document.querySelectorAll(".slider-btn");

  const navBar = document.querySelector(".nav-bar");
  const logo = document.querySelector(".logo");
  const backToTopBtn = document.querySelector(".back-to-top-btn");

  // Changing Background Color
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchBtn.style.textAlign =
      switchBtn.style.textAlign != "right" ? "right" : "left";
  });

  // Show / Hide Hidden Offers
  offerBtn.addEventListener("click", () => {
    offerMode = !offerMode;

    if (offerMode) {
      offerBtn.innerHTML = "SHOW LESS!";
      hiddenOffers.forEach((item) => (item.style.display = "block"));
    } else {
      offerBtn.innerHTML = "SHOW MORE!";
      hiddenOffers.forEach((item) => (item.style.display = "none"));
    }
  });

  // Scrolling Testimonials
  sliderBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      container.style.transform = `translateX(-${index * 100}vw)`;
      sliderBtns.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Show / Hide Navigation On Scrolling
  // Show / Hide Back To Top Button On Scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navBar.style.padding = ".5rem 5%";
      navBar.style.backgroundColor = "#f66666";
      backToTopBtn.style.display = "block";
      logo.style.transform = "scale(0.8)";
    } else {
      navBar.style.padding = "3% 5%";
      navBar.style.backgroundColor = "transparent";
      backToTopBtn.style.display = "none";
      logo.style.transform = "scale(1)";
    }
  });
});
