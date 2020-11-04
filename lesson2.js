// 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2    ++ до переменной увеличивает counter на 1 (тут же использует результат)
d = b++; alert(d);           // 1    ++ после переменной тоже увеличивает counter но возвращает прежнюю перемнную
c = (2 + ++a); alert(c);     // 5    на этом этапе переменная a = 3 и counter сразу выдает результат
d = (2 + b++); alert(d);     // 4    постфиксный опять же возвращает старое значение
alert(a);                    // 3    результат инкремента всех операций
alert(b);                    // 3    результат инкремента всех операций
// Почему код даёт именно такие результаты?


// 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); //  *= сразу присваивает переменной (a) значение a * 2
// x = 5


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 4, b = 3
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    alert(a + b)
} else {
    alert('err')
}


// 4. Присвоить переменной а значение в промежутке[0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

var a = 10
switch (a) {
    case 0:
        console.log("0");
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    case 3:
        console.log("3");
    case 4:
        console.log("4");
    case 5:
        console.log("5");
    case 6:
        console.log("6");
    case 7:
        console.log("7");
    case 8:
        console.log("8");
    case 9:
        console.log("9");
    case 10:
        console.log("10");
    case 11:
        console.log("11");
    case 12:
        console.log("12");
    case 13:
        console.log("13");
    case 14:
        console.log("14");
    case 15:
        console.log("15");

}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//  Обязательно использовать оператор return.

var a = 3, b = 3

let sum = function (a, b) {
    return (a + b)
}

let sub = function (a, b) {
    return (a - b)
}

let div = function (a, b) {
    return (a / b)
}

let mult = function (a, b) {
    return (a * b)
}


// 6. Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case 'сложение':
            return arg1 + arg2
            break;
        case 'вычитание':
            return arg1 - arg2
            break;
        case 'умножение':
            return arg1 * arg2
            break;
        case 'деление':
            return arg1 / arg2
            break;
        default:
            console.log('arg error')

    }
}

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

var zero = 0
var same = null

console.log(zero === same) // false
console.log(zero == same)  // false
console.log(zero <= same)  // true
console.log(typeof (zero)) // number тип данных число
console.log(typeof (same)) // object тип данных объект. Означает, что значение неизвестно


// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
//  Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1)
    } else if (pow <= 0) {
        alert('Степень должна быть больше 0')
    } else {
        return val
    }
}
console.log(power(3, 3))
