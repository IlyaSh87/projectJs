//  Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// значения. Затем написать скрипт, который работает по следующему принципу:
// o если a и b положительные, вывести их разность;
// o если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом. 


// для просмотра программы зайдите в консоль разработчика на странице задания нажмите
// ctrl+shift+i  и перейдите в консоль.""

const a =+ prompt(" введите первое число");
const b =+ prompt('введите второе число');
if ( isNaN(a) ||  isNaN(b) ){
    console.log('ошибка');
}

else if (a >= 0 && b >= 0) {
    console.log('разность равна: ', a-b);
 
}
 else if (a < 0 && b < 0) {
    console.log('произведение равно: ',  a*b);

}

else if(a > 0 && b < 0 || a < 0 && b > 0){
  console.log('сумма равна', a+b);
}