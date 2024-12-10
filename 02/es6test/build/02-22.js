"use strict";

var p = new Promise((resolve, reject) => {
  resolve("first!");
});
p.then(msg => {
  console.log(msg);
  throw new Error("## 에러!!");
  return "second";
}).then(msg => {
  console.log(msg);
  return "third";
}).then(msg => {
  console.log(msg);
}).catch(err => {
  console.log("오류 발생 ==> " + err);
});