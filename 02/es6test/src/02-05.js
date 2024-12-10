function addContact(name, mobile, home="없음", address="없음", email="없음") {
  var str = `name=${name}, mobile=${mobile}, home=${home},` +
            `address=${address}, email=${email}`;

  console.log(str);
}

addContact("홍길동", "010-1234-1234");
addContact("이몽룡", "010-1234-1234", "02-3422-9900", "서울시");