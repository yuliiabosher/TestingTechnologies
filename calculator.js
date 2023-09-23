// Add event listeners to the number buttons
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
// Add an event listener to the dot button
document.getElementById("bdot").addEventListener("click", function () {
  // If a value already contains a dot, wipe everything and display 0
  if (document.getElementsByTagName("h2")[0].innerHTML.includes(".")) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    // Otherwise append the dot
  } else {
    press(".");
  }
});
// Add event listener to the C button
document.getElementById("bc").addEventListener("click", function () {
  // When the C button is pressed, wipe everything and display 0
  document.getElementsByTagName("h2")[0].innerHTML = 0;
});
// Add event listeners to the sign buttons
document.getElementById("bplus").addEventListener("click", function () {
  addReplaceSign(" + ");
});
document.getElementById("bminus").addEventListener("click", function () {
  addReplaceSign(" - ");
});
document.getElementById("bmult").addEventListener("click", function () {
  addReplaceSign(" * ");
});
document.getElementById("bdivide").addEventListener("click", function () {
  addReplaceSign(" / ");
});
document.getElementById("bequals").addEventListener("click", function () {
  equals();
});
// Function to add an operator sign at the end when an operator sign button is clicked
function addReplaceSign(sign) {
  // If the screen displays 0 and the button pressed is the minus sign, display a minus sign
  if (document.getElementsByTagName("h2")[0].innerHTML == 0 && sign == " - ") {
    document.getElementsByTagName("h2")[0].innerHTML = "-";
    // If the screen displays 0 and the button pressed is not the minus sign, display 0
  } else if (document.getElementsByTagName("h2")[0].innerHTML == 0) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    // If the screen displays a minus sign only, display a minus sign
  } else if (document.getElementsByTagName("h2")[0].innerHTML == "-") {
    document.getElementsByTagName("h2")[0].innerHTML = "-";
    // Otherwise if there is already and operator sign at the end, replace that operator sign with the new one
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
    // If there is no operator sign at the end, add an operator sign at the end
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += sign;
  }
}
// Function for event listeners attached to the number buttons and the dot button
function press(num) {
  // If the screen displays 0 and the button pressed is not the dot, display the number pressed
  if (document.getElementsByTagName("h2")[0].innerHTML == "0" && num != ".") {
    document.getElementsByTagName("h2")[0].innerHTML = num;
    // If the screen displays 0 and the button pressed is the dot, display 0 followed by a dot
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML == "0" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = "0.";
    // Append a number to the screen if the screen does not diplay 0
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += num;
  }
}
// Function for the event listener attached to the equals sign
function equals() {
  // If the screen displays 0 or already displays an equals sign, display 0
  if (
    document.getElementsByTagName("h2")[0].innerHTML == "0" ||
    document.getElementsByTagName("h2")[0].innerHTML.includes("=")
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    // If the last element on the screen is one of the operator signs
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "-" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "+" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "*" ||
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "/"
  ) {
    // Display a slice of the string before the operator sign
    document.getElementsByTagName("h2")[0].innerHTML = document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        0,
        document.getElementsByTagName("h2")[0].innerHTML.length - 2
      );
    // Then append a blank space and an equals sign to the screen
    document.getElementsByTagName("h2")[0].innerHTML += " =";
    // Otherwise append a space and an equals sign to the screen
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += " =";
    // Index of the equals sign
    var equals_index = document
      .getElementsByTagName("h2")[0]
      .innerHTML.indexOf("=");
    // A slice of the string without the equals sign
    var original_string = document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(0, equals_index);
    // Split the slice using a blank space delimitor
    var arr = original_string.split(" ");
    // Loop through the array to find multiply operators
    for (i = 1; i < arr.length - 1; i++) {
      if (arr[i] == "*") {
        // Left side of the array including the first multiply sign and the number immediately after it
        var left_side = arr.slice(0, i + 2);
        // Right side of the array excluding the first multiply sign and the number immediately after it
        var right_side = arr.slice(i + 2, arr.length);
        // Delete the multiply sign and the adjacent numbers from the left side array
        left_side.pop();
        left_side.pop();
        left_side.pop();
        // Convert the numbers adjacent to the multiply sign from string to number
        var num1 = Number(arr[i - 1]);
        var num2 = Number(arr[i + 1]);
        // Multiply the numbers adjacent to the first multiply sign
        var new_num = num1 * num2;
        // Add the result to the left side array
        left_side.push(new_num);
        // New array concatenating the modified left side array and the intact right side array
        arr = left_side.concat(right_side);
      }
    }
    // Perform same as above for the divide sign
    for (i = 1; i < arr.length - 1; i++) {
      if (arr[i] == "/") {
        var left_side = arr.slice(0, i + 2);
        var right_side = arr.slice(i + 2, arr.length);
        left_side.pop();
        left_side.pop();
        left_side.pop();
        var num1 = Number(arr[i - 1]);
        var num2 = Number(arr[i + 1]);
        var new_num = num1 / num2;
        left_side.push(new_num);
        arr = left_side.concat(right_side);
      }
    }
    // Same as above for the plus sign
    for (i = 1; i < arr.length - 1; i++) {
      if (arr[i] == "+") {
        var left_side = arr.slice(0, i + 2);
        var right_side = arr.slice(i + 2, arr.length);
        left_side.pop();
        left_side.pop();
        left_side.pop();
        var num1 = Number(arr[i - 1]);
        var num2 = Number(arr[i + 1]);
        var new_num = num1 + num2;
        left_side.push(new_num);
        arr = left_side.concat(right_side);
      }
    }
    // Same as above for the minus sign
    for (i = 1; i < arr.length - 1; i++) {
      if (arr[i] == "-") {
        var left_side = arr.slice(0, i + 2);
        var right_side = arr.slice(i + 2, arr.length);
        left_side.pop();
        left_side.pop();
        left_side.pop();
        var num1 = Number(arr[i - 1]);
        var num2 = Number(arr[i + 1]);
        var new_num = num1 - num2;
        left_side.push(new_num);
        arr = left_side.concat(right_side);
      }
    }
    // The only element that's left after all the lopping is the final result, round it to 6 decimals
    let result = arr[0].toFixed(6);
    // Append the result value to the screen
    document.getElementsByTagName("h2")[0].innerHTML += ` ${result}`;
  }
}
