class Person {
  constructor (name = 'no name joe', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
return `${this.name} is years old.`
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`
  }
}
const me = new Person ('Daniel Rodriguez', 21);
  console.log(me.getGreeting());

const other = new Person ();
  console.log(other.getGreeting());