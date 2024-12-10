"use strict";

const p1 = {
  name: "john",
  age: 20
};
p1 = {
  name: "susan",
  age: 20
};

// p1 객체에 새로운 객체가 할당되는 것은 허용되지 않는다.
// Error 발생
// Uncaught TypeError: Assignment to constant variable.
console.log(p1);