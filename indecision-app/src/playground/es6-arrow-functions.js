// const square = function (x){
//   return x*x;
// };

// // const squareArrow = (x) => {
// //   return x*x ;
// // }

// const squareArrow = (x) => x*x; 

// console.log(squareArrow(12));

// const addition = (a,x) => {
//   return a+x
// }
// console.log(addition(3,5));

// const fullName = 'Daniel Rodriguez';

// const getFirstName = (x) => fullName.split(' ')[0];

// console.log(getFirstName(fullName));

// const user = {
// name: 'Daniel',
// cities: ['lamont', 'bakersfield', 'roanoke'],
// printPlacesLived: function (city) {
//   console.log(user.name);
//   console.log(user.cities);

//   this.cities.forEach(function (city) {
//     console.log(this.name += ' has lived in ' + city);
//   })
// }

// }
// user.printPlacesLived()

const multiplyer = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((multiple) => multiple * this.multiplyBy);
    }
  };

console.log(multiplyer.multiply());
