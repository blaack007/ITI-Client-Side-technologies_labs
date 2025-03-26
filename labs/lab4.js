// let x = 10;
// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x); // output : 10

/////////////////////////////////////////////////////

// const obj = { name: "Alice" };
// obj.name = "Bob";
// console.log(obj.name); // output: "Bob"

/////////////////////////////////////////////////////

// const x = 10;
// x = 20;
// console.log(x); // output: TypeError

/////////////////////////////////////////////////////

// var x = 10;
// if (true) {
//   var x = 20;
//   console.log(x); // output: 20 
// }
// console.log(x); // output: 20 

/////////////////////////////////////////////////////


// let x = 10;
// if (true) {
//   let x = 20;
//   console.log(x); // output: 20
// }
// console.log(x); // output: 10

/////////////////////////////////////////////////////

// function greet() {
//     console.log(this.name);
//   }

//   const person = { name: "Bob" };
//   const boundGreet = greet.bind(person);
//   boundGreet(); //output: Bob
  
/////////////////////////////////////////////////////

// function greet(a, b) {
//     console.log(this.name, a, b);
//   }
//   const person = { name: "Bob" };
//   greet.apply(person, ["Hello", "World"]); // output: Bob Hello world

/////////////////////////////////////////////////////

//   function greet() {
//     console.log(this.name);
//   }
//   const person = { name: "Bob" };
//   greet.call(person); //output: Bob

  /////////////////////////////////////////////////////

// const obj = {
//     name: "Alice",
//     greet() {
//       setTimeout(() => {
//         console.log(this.name);
//       }, 1000);
//     },
//   };
//   obj.greet(); // Alice

/////////////////////////////////////////////////////

// const obj = {
//     name: "Alice",
//     greet() {
//       setTimeout(function () {
//         console.log(this);
//       }, 1000);
//     },
//   };
//   obj.greet(); //output: Global Object 
  
  
  /////////////////////////////////////////////////////


//   const obj = {
//   name: "Alice",
//   greet() {
//     console.log(this.name);
//   },
// };
// obj.greet(); // output : Alice

 /////////////////////////////////////////////////////

//  "use strict";
// function myFunction() {
//   console.log(this);
// }
// myFunction(); //output : undefined

/////////////////////////////////////////////////////

// function myFunction() {
//     console.log(this);
//   }
//   myFunction(); // output: Global Object 
  