"use strict";

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    var num = Math.random(); // 0 ~ 1 사이의 난수 발생
    if (num >= 0.8) {
      reject("생성된 숫자가 0.8이상임 - " + num);
    }
    resolve(num);
  }, 2000);
});
p.then(result => {
  console.log("처리 결과 : ", result);
}).catch(err => {
  console.log("오류 : ", err);
});
console.log("## Promise 객체 생성!");