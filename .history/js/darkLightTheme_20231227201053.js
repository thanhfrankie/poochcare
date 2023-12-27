document.getElementById("switchButton").onclick = function () {
    document.getElementById("header").classList.toggle("dark");
    document.querySelector(".about-us").classList.toggle("dark");

    document.querySelectorAll("ul").classList.toggle("dark");
    document.querySelector(".subscribe").classList.toggle("dark");
  };
  