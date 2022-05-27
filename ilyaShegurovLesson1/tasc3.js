// * Чему будет равно JS-выражение 1000 + "108"?
 """в js при сложение предпочтение отдается конкатенации те склеиванию строки и числа"""


let firstExpression = 100;
let secondExpression = "108";

console.log(typeof(firstExpression)); //number
console.log(typeof(secondExpression)); //string

console.log(firstExpression + secondExpression);