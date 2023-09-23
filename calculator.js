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

document.getElementById("bplus").addEventListener("click", function () {
  addReplaceSign("+");
});
document.getElementById("bminus").addEventListener("click", function () {
  addReplaceSign("-");
});
document.getElementById("bmult").addEventListener("click", function () {
  addReplaceSign("*");
});
document.getElementById("bdivide").addEventListener("click", function () {
  addReplaceSign("/");
});
document.getElementById("bequals").addEventListener("click", function () {
  equals();
});
function addReplaceSign(sign) {
  if (document.getElementsByTagName("h2")[0].innerHTML == 0) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "-" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "+" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "*" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "/"
  ) {
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] = sign;
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += sign;
  }
}
function press(num) {
  if (document.getElementsByTagName("h2")[0].innerHTML == "0") {
    document.getElementsByTagName("h2")[0].innerHTML = num;
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += num;
  }
}
function equals() {
  if (document.getElementsByTagName("h2")[0].innerHTML == "0") {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "-" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "+" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "*" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 1
    ] == "/"
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        0,
        document.getElementsByTagName("h2")[0].innerHTML.length - 1
      );
    document.getElementsByTagName("h2")[0].innerHTML += "=";
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += "=";
    var equals_index = document
      .getElementsByTagName("h2")[0]
      .innerHTML.indexOf("=");
    var original = document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(0, equals_index);
    var result = 0;
    for (i = 0; i < original.length; i++) {
      if (original[i] == "*") {
        var left_side = original.slice(0, i + 2);
        var right_side = original.slice(i + 2, original.length);
        left_side.pop();
        left_side.pop();
        left_side.pop();
        var num1 = Number(original[i - 1]);
        var num2 = Number(original[i + 1]);
        var new_num = num1 * num2;
        left_side.push(new_num);
        var modified = left_side.concat(right_side);
      }
    }
  }
}
