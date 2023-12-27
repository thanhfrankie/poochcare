document.getElementById("switchButton").onclick = function () {
    document.getElementById("header").classList.toggle("dark");

    document.querySelectorAll(".lia").classList.toggle("dark");
    document.querySelector(".subscribe").classList.toggle("dark");
  };
  