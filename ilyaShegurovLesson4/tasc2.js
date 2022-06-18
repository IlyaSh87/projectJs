// Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
/**
 * Объект "Корзина".
 */
 
const bascet = {
    
    items: [
        { 
            title: 't-shirt', 
            price: 999 
        }, 
        { 
            title: 'boots', 
            price: 7900 
        },
        { 
            title: 'trouses', 
            price: 10990 
        },
    ],

    
    getTotalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += item.price;
        }

        return result;
    }
};

/* подсчитываем итоговую стоимость,
 * вызывая функцию подсчета у объекта cart */
const total = bascet.getTotalPrice();

/* выводим итоговую стоимость в консоль */
console.log(total);