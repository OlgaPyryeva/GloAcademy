"use strict";
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 56;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

// const asking = function () {
//   title = prompt("Как называется проект?", "калькулятор верстки");
//   screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные");
//   while (!isNumber(screenPrice)) {
//     screenPrice = prompt("Сколько будет стоить данная работа?");
//   }
//   adaptive = confirm("Нужен ли адаптив на сайте?");
// };
const asking = function () {
  title = prompt("Как называется проект?", "калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные");
  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    do {
      sum += +prompt("Сколько это будет стоить?");
    } while (!isNumber(sum));
  }
  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return (
    title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
  );
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price <= 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(rollback);
showTypeOf(allServicePrices);
showTypeOf(servicePercentPrice);
showTypeOf(service1);
showTypeOf(service2);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log(
  "Итоговая стоимость за вычетом отката посреднику " +
    Math.ceil(getServicePercentPrices(fullPrice, rollback))
);
