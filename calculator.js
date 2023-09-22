document.getElementById("b7").addEventListener("click", function () {
  press(7);
});
document.getElementById("b8").addEventListener("click", function () {
  press(8);
});
document.getElementById("b9").addEventListener("click", function () {
  press(9);
});
document.getElementById("b4").addEventListener("click", function () {
  press(4);
});
document.getElementById("b5").addEventListener("click", function () {
  press(5);
});
document.getElementById("b6").addEventListener("click", function () {
  press(6);
});
document.getElementById("b1").addEventListener("click", function () {
  press(1);
});
document.getElementById("b2").addEventListener("click", function () {
  press(2);
});
document.getElementById("b3").addEventListener("click", function () {
  press(3);
});
document.getElementById("b0").addEventListener("click", function () {
  press(0);
});
document.getElementById("bdot").addEventListener("click", function () {
  if (document.getElementsByTagName("h2")[0].innerHTML.includes(".")) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else {
    press(".");
  }
});
document.getElementById("bc").addEventListener("click", function () {
  document.getElementsByTagName("h2")[0].innerHTML = 0;
});
function press(num) {
  if (document.getElementsByTagName("h2")[0].innerHTML == "0") {
    document.getElementsByTagName("h2")[0].innerHTML = num;
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += num;
  }
}
