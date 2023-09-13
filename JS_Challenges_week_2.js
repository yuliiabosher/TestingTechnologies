console.log("Hello world");
let greet = (name) => "Hi " + name + "!";
console.log(greet("John"));
let isEven = (num) => num % 2 === 0;
let counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};
console.log(counterFunc(3));
let nameAge = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
};
let printOnly = () => {
  console.log("printing");
};
let sum = (num1, num2) => num1 + num2;
console.log(sum(10, 2));
let reverseString = (name) => {
  var splitString = name.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};
n = "Hello";
console.log(reverseString(n));
let reverseArray = (arr) => arr.reverse();
console.log(reverseArray([1, 2, 3, 4, 5]));
let mostExpensiveItem = (arr) => {
  new_arr = [];
  for (i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]["stock"] * arr[i]["price"]);
  }
  var max_value = new_arr[0];
  for (i = 0; i < new_arr.length; i++) {
    if (new_arr[i] > max_value) {
      max_value = new_arr[i];
    }
  }
  var index = new_arr.indexOf(max_value);
  return arr[index];
};
x = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];
console.log(mostExpensiveItem(x));
