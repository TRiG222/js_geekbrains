// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.



let num = 1;
let numArr = [];

while (num <= 100) {
    if (num == 1) {
        numArr.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (num % i !== 0) {
            i += 1;
            result += 1;
        }
        if (result == num) {
            numArr.push(result);
        }
    }
    num += 1;
}
console.log(numArr);



// 2. С этого урока начинаем работать с функционалом интернет - магазина.
//     Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.Задачи:

// a) Организовать такой массив для хранения товаров в корзине;

let basket = [
    {
        product: "apple",
        price: 50
    },
    {
        product: "coconut",
        price: 100
    },
    {
        product: "cherry",
        price: 30
    },
    {
        product: "mango",
        price: 90
    }
];

console.log(basket)

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basketCount = 0
function basketSum(prod) {
    for (i in prod) {
        basketCount += prod[i].price
    }
}
basketSum(basket)
console.log('Сумма корзины = ' + basketCount)


// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (let i = 0; i < 10; console.log(i++)) { }

// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5

let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}

