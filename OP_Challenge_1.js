class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}
const user1 = new User("John", "Doe");
const user2 = new User("Jane", "Doe");
console.log(user1.firstName, user1.lastName);
console.log(user1.sayHello());
console.log(user2.sayHello());
