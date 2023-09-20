class User {
  constructor(username) {
    this._username = username;
    if (this.constructor === User) {
      throw new TypeError("Cannot construct Abstract instances directly.");
    }
  }
  get Username() {
    return this._username;
  }
  set Username(newUsername) {
    return (this._username = newUsername);
  }
  // An abstract method
  stateYourRole() {
    // Error Type. The child has implemented this method but also called `super.foo()`.
    throw new TypeError("Do not call abstract method foo from child.");
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
  }
  stateYourRole() {
    //super.stateYourRole();
    return "admin";
  }
}

class Viewer extends User {
  constructor(username) {
    super(username);
  }
  stateYourRole() {
    //super.stateYourRole();
    return "viewer";
  }
}
const admin = new Admin("Balthazar");
console.log(admin.stateYourRole());

const viewer = new Viewer("Melchior");
console.log(viewer.stateYourRole());
