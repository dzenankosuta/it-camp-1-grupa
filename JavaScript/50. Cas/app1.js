person = {
  firstName: "Muhamed",
  lastName: "Krkmisevic",
};

person.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person);

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const muhamed = new User("Muhamed", "Krkmisevic");

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(muhamed);

console.log(muhamed.fullName());

// 2. Opcija je preko funkcije na sledeci nacin:

// Unutar objekta userFunctions stavljamo sve metode koje zelimo dodati u
// objekte napravljene na sledeci nacin.
const userFunctions = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function createUser(firstName, lastName) {
  const newUser = Object.create(userFunctions);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  return newUser;
}

const ahmed = createUser("Ahmed", "Krkmisevic");
console.log(ahmed);
console.log(ahmed.fullName());
