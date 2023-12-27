document.getElementById("switchButton").onclick = function () {
    document.getElementById("header").classList.toggle("dark");
    document.querySelectorAll(".li").classList.toggle("dark");
    console.log(document.querySelectorAll(".li"))
    document.getElementById("header").classList.toggle("dark");
    document.getElementById("header").classList.toggle("dark");
  };
  