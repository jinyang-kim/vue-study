"use strict";

function addContact1(_ref) {
  let {
    name,
    phone,
    email = "이메일없음",
    age = 0
  } = _ref;
  console.log(name, phone, email, age);
}
addContact1({
  name: "이몽룡",
  phone: "010-1234-1234"
});
function addContact2(contact) {
  if (!contact.email) contact.email = "이메일없음";
  if (!contact.age) contact.age = 0;
  let {
    name,
    phone,
    email,
    age
  } = contact;
  console.log(name, phone, email, age);
}
addContact2({
  name: "이몽룡",
  phone: "010-1234-1234"
});
function addContact3(name, phone) {
  let email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "이메일없음";
  let age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  console.log(name, phone, email, age);
}
addContact3("이몽룡", "010-1234-1234");