/*
// Q1 Error out of scope
// function test() {
//   let a;
//   console.log(a);
//   console.log(foo());

//   a = 1;
//   function foo() {
//     return 2;
//   }
// }

// test();

// Q2
// let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);

// console.log(firstResult(2));
// console.log(result);

// 3. What is the result of the following code? Explain your answer.

let fullname = "John Doe";

const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

const test = obj.prop.getFullname;

console.log(test());
*/
// Q4

let a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
