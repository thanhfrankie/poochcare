document.getElementById("switchButton").onclick = function () {
    document.getElementById("header").classList.toggle("dark");
    document.getElementById(".about-us").classList.toggle("dark");

    document.querySelector("ul").classList.toggle("dark");
    document.querySelector(".subscribe").classList.toggle("dark");
  };
  