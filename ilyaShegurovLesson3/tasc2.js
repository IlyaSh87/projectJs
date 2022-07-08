// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
 //Объект "Корзина".

 const bascet = [
    ['t-shirt', 4000],
    ['boots', 7000],
    ['trouses', 5000]

 ]

 const total = totalPrice(bascet);
 console.log(total);


function totalPrice(argument) {
    let result = 0;

    for (let item of bascet) {
        result += item[1];
    }

    return result
}