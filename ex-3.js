function validatePIN(pin) {
  //Start coding here
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  } else {
    return true;
  }
  // ทำไม่ทันในการเช็คเงื่อนไข String
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
