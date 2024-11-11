function countPositivesSumNegatives(input) {
  //Start coding here
  if (!Array.isArray(input)) {
    //เปิดดูในที่เคยจดไว้ในเรื่องของการเช็ค isArray เนื่องจากลืม Syntax การใช้งานว่าเขียนยังไง เข้าใจคอนเซ็ปการเช็คว่ามันทำงานอบย่างไร
    return [];
  }

  let positives = 0;
  let negative = 0;
  let num;

  for (let i = 0; i < input.length; i++) {
    num = input[i];

    if (num > 0) {
      positives++;
    } else if (num < 0) {
      negative += num;
    }
  }
  return [positives, negative];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
