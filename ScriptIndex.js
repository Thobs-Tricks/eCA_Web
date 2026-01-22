  let ToAbout = document.getElementById("About");
let ToService = document.getElementById("Services");

ToAbout.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

ToService.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

//Arro-Up

document.addEventListener("DOMContentLoaded", () => {
  const arrowUp = document.querySelector(".ArrowUp");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      arrowUp.style.display = "flex";
    } else {
      arrowUp.style.display = "none";
    }
  });

  arrowUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
