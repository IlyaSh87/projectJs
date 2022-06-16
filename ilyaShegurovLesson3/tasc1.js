// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
for(let number = 2 ; number <= 100; number++){
    let isPrime = true;

for (let i = 2; i <= number-1;i++){
    if(number % i === 0){
        isPrime = false;
        break
    }
}
if (isPrime) console.log(number);
}