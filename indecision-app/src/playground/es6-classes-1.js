// class Person {
//   constructor (name = 'no name joe', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
// return `Hi. I am ${this.name} is years old.`
//   }
//   getDescription(){
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }

// class Student extends Person {
//   constructor(name, age, major){
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription(){
//     let description = super.getDescription();

//     if (this.hasMajor()) {
//       description += ` Their major is ${this.mayor}.`
//     }
//     return description;
//   }
// }

// const me = new Student ('Daniel Rodriguez', 21);
//   console.log(me.getGreeting());

// const other = new Student ();
//   console.log(other.getGreeting());







class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. I am ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();

    if (this.hasMajor()){
      description += ` Their major is ${this.major()}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
    // hasLocation(){
    //   return !!this.homeLocation;
    // }
    getGreeting(){
      let greeting = super.getGreeting();

      if (this.homeLocation) {
        greeting += ` I am visting from ${this.homeLocation}.`;
      }
      return greeting;
    }
  }
// 1. hi i am andrew Med  i am visiting from philadelphia. 
// 2. hi i am andrew Med.



const me = new Traveler('Andrew Mead', 26, 'Philly');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

// Traveler -> Person (new class extends persons class)
// add support for homelocation (much like major is the third argument for student. home location will be an argument)
// override getGreeting

