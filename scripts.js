const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const progressBars = document.querySelectorAll(".chart");

burger.addEventListener("click", function() {
  this.classList.toggle("active");
});

menu.addEventListener("click", function() {
  burger.classList.toggle("active");
});

new EasyPieChart(progressBars[0], {
  barColor: "#f34739",
  scaleColor: false,
  lineWidth: 4,
  size: 220,
  rotate: 160
});

new EasyPieChart(progressBars[1], {
  barColor: "#009989",
  scaleColor: false,
  lineWidth: 4,
  size: 220,
  rotate: 160
});

new EasyPieChart(progressBars[2], {
  barColor: "#152b3c",
  scaleColor: false,
  lineWidth: 4,
  size: 220,
  rotate: 160
});
