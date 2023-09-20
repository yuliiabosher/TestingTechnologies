class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    return (this._firstName = newFirstName);
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    return (this._lastName = newLastName);
  }
  hello() {
    return "Hello World";
  }
}
const user = new User("John", "Doe");
user.firstName = "Jane";
user.lastName = "Smith";
console.log(user.hello());
console.log(`My name is ${user.firstName} ${user.lastName}`);
