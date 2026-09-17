// 1. Define the Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed; 
  }

  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");

myDog.eat();  
myDog.bark(); 