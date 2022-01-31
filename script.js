"use strict";

const title = prompt("Как называется проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollback = 56;
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const adaptive = !!Number(
  prompt("Нужен ли адаптив на сайте?", "ведите 1 - если нужен и 0 - если нет")
);
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log("тип переменной title" + " : " + typeof title);
console.log("тип переменной fullPrice" + " : " + typeof fullPrice);
console.log("тип переменной adaptive" + " : " + typeof adaptive);
console.log("длинна строки screens:" + " " + screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рубля");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");
console.log(screens.toLowerCase().split(", "));
console.log(
  "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100)
);
console.log(
  "Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice
);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
