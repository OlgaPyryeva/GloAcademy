"use strict";

const htmlTitle = document.getElementsByTagName("h1")[0];

const countBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const plusBtn = document.querySelector(".screen-btn");

const percentElem = document.querySelectorAll(".other-items.percent");
const numberElem = document.querySelectorAll(".other-items.number ");

const rollbackInput = document.querySelector(".rollback  input[type='range']");
const rollbackSpan = document.querySelector(".rollback  span.range-value");

const priceInput = document.getElementsByClassName("total-input")[0];
const countScreens = document.getElementsByClassName("total-input")[1];
const priceServises = document.getElementsByClassName("total-input")[2];
const fullCount = document.getElementsByClassName("total-input")[3];
const rollbackCount = document.getElementsByClassName("total-input")[4];

let screenBlocks = document.querySelectorAll("div.screen");

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},

//   asking: function () {
//     do {
//       appData.title = prompt("Как называется проект?");
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name = "";
//       let price = 0;

//       do {
//         name = prompt("Какие типы экранов нужно разработать?");
//       } while (appData.isNumber(name));

//       do {
//         price = +prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price));
//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     for (let i = 0; i < 2; i++) {
//       let name = "";
//       let price = 0;
//       do {
//         name = prompt("Какой дополнительный тип услуги нужен?");
//       } while (appData.isNumber(name));

//       do {
//         price = +prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));
//       appData.services[name] = +price;
//     }
//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },
//   addPrices: function () {
//     for (let screen of appData.screens) {
//       appData.screenPrice += +screen.price;
//     }
//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     }
//   },
//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },

//   getFullPrice: function getFullPrice() {
//     appData.fullPrice = appData.screenPrice + appData.allServicePrices;
//   },
//   getServicePercentPrices: function () {
//     appData.servicePercentPrice =
//       appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
//   },
//   getTitle: function () {
//     appData.title =
//       appData.title.trim()[0].toUpperCase() +
//       appData.title.trim().substring(1).toLowerCase();
//   },
//   getRollbackMessage: function (price) {
//     if (price > 30000) {
//       return "Даем скидку в 10%";
//     } else if (price > 15000 && price <= 30000) {
//       return "Даем скидку в 5%";
//     } else if (price <= 15000 && price >= 0) {
//       return "Скидка не предусмотрена";
//     } else if (price < 0) {
//       return "Что то пошло не так";
//     }
//   },

//   logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
//   start: () => {
//     appData.asking();
//     appData.addPrices();

//     appData.getFullPrice();
//     appData.getServicePercentPrices();
//     appData.getTitle();
//     appData.logger();
//   },
// };

// appData.start();
