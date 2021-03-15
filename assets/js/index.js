window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  const body = document.querySelector("body");

  body.style.overflow = "visible";
  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1001);
});

window.addEventListener("DOMContentLoaded", () => {
  new Typed(".type", {
    strings: ["Abdulkadir", "a tech enthusiast", "an aspiring developer"],
    backSpeed: 75,
    typeSpeed: 100,
    loop: true,
  });
});

if (window.innerWidth < 900 && window.innerHeight < 1024) {
  document.getElementById("particles-js").id = "";
  const canvas = document.querySelector("canvas");
  canvas.parentElement.removeChild(canvas);
}
