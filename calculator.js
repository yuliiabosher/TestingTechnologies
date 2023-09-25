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
  // Split the screen content string by the blank space delimitor
  let check_dot = document.getElementsByTagName("h2")[0].innerHTML.split(" ");
  /* If the dot is pressed and the last element on the screen is a numeric value that 
  already contains a dot, wipe everything and display 0 */
  if (check_dot[check_dot.length - 1].includes(".")) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    /* If the dot is pressed and the last non-blank element on the screen 
    is one of the operator signs, wipe everything and display 0 */
  } else if (
    check_dot[check_dot.length - 1] == "+" ||
    check_dot[check_dot.length - 1] == "-" ||
    check_dot[check_dot.length - 1] == "*" ||
    check_dot[check_dot.length - 1] == "/"
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  }
  // Otherwise append the dot
  else {
    press(".");
  }
});
// Add event listener to the C button
document.getElementById("bc").addEventListener("click", function () {
  // When the C button is pressed, wipe everything and display 0
  document.getElementsByTagName("h2")[0].innerHTML = 0;
  document.getElementsByTagName("h2")[1].innerHTML = null;
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
  // If the screen already displays an equals sign, replace everything and display 0
  if (document.getElementsByTagName("h2")[0].innerHTML.includes("=") == true) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    document.getElementsByTagName("h2")[1].innerHTML = null;
  }
  // If the screen displays 0 and the button pressed is the minus sign, display a minus sign
  else if (
    document.getElementsByTagName("h2")[0].innerHTML == 0 &&
    sign == " - "
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = "-";
    // If the screen displays 0 and the operator button pressed is not the minus sign, display 0
  } else if (document.getElementsByTagName("h2")[0].innerHTML == 0) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    // If the screen displays a minus sign only, display a minus sign
  } else if (document.getElementsByTagName("h2")[0].innerHTML == "-") {
    document.getElementsByTagName("h2")[0].innerHTML = "-";
    // Otherwise if there is already an operator sign at the end, replace that operator sign with the new one
  } else if (
    document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        document.getElementsByTagName("h2")[0].innerHTML.length - 3,
        document.getElementsByTagName("h2")[0].innerHTML.length
      ) == " - " ||
    document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        document.getElementsByTagName("h2")[0].innerHTML.length - 3,
        document.getElementsByTagName("h2")[0].innerHTML.length
      ) == " + " ||
    document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        document.getElementsByTagName("h2")[0].innerHTML.length - 3,
        document.getElementsByTagName("h2")[0].innerHTML.length
      ) == " * " ||
    document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        document.getElementsByTagName("h2")[0].innerHTML.length - 3,
        document.getElementsByTagName("h2")[0].innerHTML.length
      ) == " / "
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = document
      .getElementsByTagName("h2")[0]
      .innerHTML.slice(
        0,
        document.getElementsByTagName("h2")[0].innerHTML.length - 3
      )
      .concat(sign);

    // If there is no operator sign at the end, add an operator sign at the end
  } else {
    if (
      document.getElementsByTagName("h2")[0].innerHTML[
        document.getElementsByTagName("h2")[0].innerHTML.length - 1
      ] == "."
    ) {
      document.getElementsByTagName("h2")[0].innerHTML += 0;
    }
    document.getElementsByTagName("h2")[0].innerHTML += sign;
  }
}
// Function for event listeners attached to the number buttons and the dot button
function press(num) {
  // If the screen already displays an equals sign, replace everything and display 0
  if (document.getElementsByTagName("h2")[0].innerHTML.includes("=") == true) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
    document.getElementsByTagName("h2")[1].innerHTML = null;
  }
  // If the screen displays 0 and the button pressed is not the dot, display the number pressed
  else if (
    document.getElementsByTagName("h2")[0].innerHTML == "0" &&
    num != "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = num;
    // If the last element on the screen is one of the operator signs and the dot is pressed, display 0
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "+" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "-" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "*" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  } else if (
    document.getElementsByTagName("h2")[0].innerHTML[
      document.getElementsByTagName("h2")[0].innerHTML.length - 2
    ] == "/" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = 0;
  }
  // If the screen displays 0 and the button pressed is the dot, display 0 followed by a dot
  else if (
    document.getElementsByTagName("h2")[0].innerHTML == "0" &&
    num == "."
  ) {
    document.getElementsByTagName("h2")[0].innerHTML = "0.";
    // Otherwise append a number to the screen
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
    document.getElementsByTagName("h2")[1].innerHTML = null;
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
    // Otherwise just append a space and an equals sign to the screen
  } else {
    document.getElementsByTagName("h2")[0].innerHTML += " =";
    // Copy the screen string to the line below
    document.getElementsByTagName("h2")[1].innerHTML =
      document.getElementsByTagName("h2")[0].innerHTML;
    // Call the function processing the operations one by one
    processNumbers("/");
    processNumbers("*");
    processNumbers("-");
    processNumbers("+");
    // Replace the copy of the screen string with the slice of that string that excludes the equals sign
    document.getElementsByTagName("h2")[1].innerHTML = document
      .getElementsByTagName("h2")[1]
      .innerHTML.slice(0, [
        document.getElementsByTagName("h2")[1].innerHTML.length - 1,
      ]);
  }
}
function processNumbers(sign) {
  /* Iterate through the copy of the screen string while it still 
      includes an operator sign and is more than 5 characters long */
  while (
    document.getElementsByTagName("h2")[1].innerHTML.includes(sign) == true &&
    document.getElementsByTagName("h2")[1].innerHTML.length > 5
  ) {
    // Index of the equals sign in the copy of the screen string
    var equals_index = document
      .getElementsByTagName("h2")[1]
      .innerHTML.indexOf("=");
    // A slice of the string without the equals sign
    var original_string = document
      .getElementsByTagName("h2")[1]
      .innerHTML.slice(0, equals_index);
    // Split the slice using a blank space delimitor
    var ar = original_string.split(" ");
    // In the resulting array find the index of an operator sign
    var sign_index = ar.indexOf(sign);
    // Left side of the array including the first operator sign and the number immediately after it
    var left_side = ar.slice(0, sign_index + 2);
    // Right side of the array excluding the first operator sign and the number immediately after it
    var right_side = ar.slice(sign_index + 2, ar.length);
    // Delete the operator sign and the adjacent numbers from the left side array
    left_side.pop();
    left_side.pop();
    left_side.pop();
    // Convert the numbers adjacent to the operator sign from string to number
    var num1 = Number(ar[sign_index - 1]);
    var num2 = Number(ar[sign_index + 1]);
    // Process the numbers adjacent to the first operator sign
    let new_num = 0;
    switch (sign) {
      case "*":
        new_num = num1 * num2;
        break;
      case "/":
        new_num = num1 / num2;
        break;
      case "+":
        new_num = num1 + num2;
        break;
      case "-":
        // If the minus sign element cannot be found in the array, exit the function
        if (sign_index == -1) {
          return;
        } else if (sign_index == 0) {
          num1 = 0;
          new_num = num1 - num2;
          return;
        }
        // Otherwise subtract the second number from the first number
        new_num = num1 - num2;
        break;
    }
    // For operations with floats or division round the value to 5 decimals
    if (
      document.getElementsByTagName("h2")[0].innerHTML.includes("/") == true ||
      document.getElementsByTagName("h2")[0].innerHTML.includes(".") == true
    ) {
      new_num = new_num.toFixed(5);
    }
    // Add the result to the left side array
    left_side.push(new_num);
    // New array concatenating the modified left side array and the intact right side array
    var new_ar = left_side.concat(right_side);
    // Turn the array into a string
    var new_string = new_ar.join();
    // Replace commas with spaces
    var newest_string = new_string.replaceAll(",", " ");
    // Replace the copy of the screen string with the resulting string, a blank space and an equals sign
    document.getElementsByTagName("h2")[1].innerHTML = `${newest_string} =`;
  }
}
