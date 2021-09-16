const current = document.getElementById("current");
const opacity = 0.6;
const imgs = document.querySelectorAll(".img");
imgs.forEach(img => {
  img.addEventListener("click", (e) => {
    imgs.forEach(img => {img.style.opacity = 1;
    });
  current.src = e.target.src;
  e.target.style.opacity = opacity; 
  });
});