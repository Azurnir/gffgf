'use strict';

// Дополнительный вариант практики для запуска в браузере.
// Подключите этот файл к index.html и выполняйте задачи по очереди.
// prompt() возвращает строку, поэтому числовые данные преобразуем через Number().

// Задача 1. Стоимость заказа — пример полностью
const price = Number(prompt('Задача 1. Цена одного товара:'));
const quantity = Number(prompt('Задача 1. Количество товара:'));
const total = price * quantity;
alert(`Стоимость заказа: ${total}`);

// Задача 2. Площадь прямоугольника
const width = Number(prompt("Введите ширину:"));
const height = Number(prompt("Введите высоту:"));
let area = width * height;
alert("Площадь прямоугольника: " + area);
// Задача 3. Цена со скидко
//использован прайс из первого задания
const discountPercent = Number(prompt("Введите процент скидки:"));
let discountAmount = price * (discountPercent / 100);
let finalPrice = price - discountAmount;
alert("Итоговая цена: " + finalPrice);
// Задача 4. Минуты в часы и минуты
const totalMinutes = Number(prompt("Введите количество минут:"));
let hours = Math.trunc(totalMinutes / 60);
let minutes = totalMinutes % 60;
alert(hours + " ч " + minutes + " мин");

// Задача 5. Целая часть и остаток от деления
const dividend = Number(prompt("Введите делимое:"));
const divisor = Number(prompt("Введите делитель:"));
let quotient = Math.trunc(dividend / divisor);
let remainder = dividend % divisor;
alert(divisionResult(dividend, divisor));