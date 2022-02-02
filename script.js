"use strict";

let title = prompt("Как называется проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollback = 56;
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const adaptive = !!Number(
  prompt("Нужен ли адаптив на сайте?", "ведите 1 - если нужен и 0 - если нет")
);
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
let allServicePrices;

const getAllServicePrices = function (priceOfServise1, priceOfServise2) {
  return priceOfServise1 + priceOfServise2;
};

function getFullPrice(priceOfScreens, priceOfAllService) {
  return priceOfScreens + priceOfAllService;
}

const getTitle = function (str) {
  for (let i = 0; i < str.length; ) {
    if (str[i] == " ") {
      i++;
    } else {
      return str[i].toUpperCase() + str.slice(i + 1).toLowerCase();
    }
  }
};

function getServicePercentPrices(foolCoast, supplierPercentage) {
  return foolCoast - foolCoast * (supplierPercentage / 100);
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
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

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);

servicePercentPrice = getServicePercentPrices(
  getFullPrice(screenPrice, allServicePrices),
  rollback
);
getTitle(title);

showTypeOf(getTitle(title));
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log(
  "Итоговая стоимость за вычетом отката посреднику " +
    Math.ceil(getServicePercentPrices(fullPrice, rollback))
);
