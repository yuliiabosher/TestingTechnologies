document.getElementById("b7").addEventListener("click", function () {
  press("7");
});
function press(num) {
  if (document.getElementsByTagName("h2")[0].innerHTML == "0") {
    document.getElementsByTagName("h2")[0].innerHTML = num;
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += num;
  }
}
