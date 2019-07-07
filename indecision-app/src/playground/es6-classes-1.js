class Person {
  constructor (name = 'no name joe', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
return `Hi. I am ${this.name} is years old.`
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.mayor}.`
    }
    return description;
  }
}

const me = new Student ('Daniel Rodriguez', 21);
  console.log(me.getGreeting());

const other = new Student ();
  console.log(other.getGreeting());