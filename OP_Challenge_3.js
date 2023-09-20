class User {
  constructor(username) {
    this._username = username;
  }
  get username() {
    return this._username;
  }
  set username(newUsername) {
    return (this._username = newUsername);
  }
}

class Admin extends User {
  expressYourRole() {
    return "Admin";
  }
  sayHello() {
    return `Hello admin, ${this._username}`;
  }
}
const admin = new Admin("Balthazar");
console.log(admin.sayHello());
