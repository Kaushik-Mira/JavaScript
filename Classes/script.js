//TODO: 1. Defining a Class
// You can define a class using the class keyword followed by the class name and a pair of curly braces. The class can have a constructor and methods.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


//TODO: 2. Creating an Instance
// You can create an instance of a class using the new keyword:
const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.


//TODO: 3. Constructor Method
// The constructor method is a special method for creating and initializing an object created with a class. It’s called automatically when a new instance of the class is created.

//? 4. Methods
// Methods can be defined inside the class and can be called on instances of the class. They don’t need the function keyword.
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Rex');
myDog.speak(); // Output: Rex barks.


//TODO: 5. Inheritance
// JavaScript classes can inherit from other classes using the extends keyword. The child class can override methods from the parent class.
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const myCat = new Cat('Whiskers');
myCat.speak(); // Output: Whiskers meows.


//TODO: 6. Static Methods
// Static methods are called on the class itself rather than on instances of the class. They are defined using the static keyword.
class MathUtility {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtility.add(5, 3)); // Output: 8


//TODO: 7. Getters and Setters
// Classes can also have getters and setters to define how properties are accessed and modified.
class Person {
    constructor(name) {
        this._name = name; // underscore convention for private property
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person = new Person('Alice');
console.log(person.name); // Output: Alice
person.name = 'Bob';
console.log(person.name); // Output: Bob


