// this keyword and bind method
const personObj = {
  name: "sujal",
  greet() {
    console.log("Hello !", this.name);
  },
};

console.log(personObj);
personObj.greet();

const obj2 = {
  name: "sujal",
  greet: () => console.log(`hello ${this.name}`),
};

console.log(obj2);
obj2.greet();

// USING BINDING CONCEPT
const obj3 = {
  age: 100,
  showAge: function showAge(name) {
    console.log(`Age of ${name} is ${this.age}`);
  },
};

const showAgeOfAnish = obj3.showAge.bind(obj3, "anish");
showAgeOfAnish();
