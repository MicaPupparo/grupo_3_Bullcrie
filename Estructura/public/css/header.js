function toggleBurger() {
    var x = document.getElementById("ul-responsive");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
  }