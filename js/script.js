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

let screenBlocks = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();
    countBtn.addEventListener("click", appData.start);
    plusBtn.addEventListener("click", appData.addScreenBlock);
  },
  addTitle: function () {
    document.title = htmlTitle.textContent;
  },
  start: () => {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    // appData.getServicePercentPrices();
    // appData.logger();
    appData.showResult();

    console.log(appData);
  },
  showResult: function () {
    priceInput.value = appData.screenPrice;
    priceServises.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullCount.value = appData.fullPrice;
  },
  addScreens: function () {
    screenBlocks = document.querySelectorAll(".screen");
    screenBlocks.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },
  addServices: function () {
    numberElem.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });

    percentElem.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screenBlocks[0].cloneNode(true);
    screenBlocks[screenBlocks.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price <= 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
