document.getElementById("switchButton").onclick = function () {
    document.getElementById("header").classList.toggle("dark");

    document.querySelectorAll(".li").classList.toggle("dark");
    document.querySelector(".subscribe").classList.toggle("dark");
  };
  