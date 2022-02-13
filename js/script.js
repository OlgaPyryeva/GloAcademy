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
  screenCount: 0,
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
    countBtn.addEventListener("click", appData.checkBeforeCount);
    plusBtn.addEventListener("click", appData.addScreenBlock);
    appData.getRollback();
  },
  addTitle: function () {
    document.title = htmlTitle.textContent;
  },
  start: () => {
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    appData.logger();
  },

  checkBeforeCount: function () {
    if (appData.addScreens() !== true) {
      appData.screens = [];
      alert("не введен тип или кол-во экранов");
    } else {
      appData.start();
    }
  },

  showResult: function () {
    priceInput.value = appData.screenPrice;
    priceServises.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullCount.value = appData.fullPrice;
    rollbackCount.value = appData.servicePercentPrice;
    countScreens.value = appData.screenCount;
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
        count: +input.value,
        price: +select.value * +input.value,
      });
    });
    if (appData.screens.find((item) => item.price === 0)) {
      return false;
    } else {
      return true;
    }
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
    for (let screen of appData.screens) {
      appData.screenCount += +screen.count;
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

    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getRollback: function () {
    const changeRollback = function (event) {
      rollbackSpan.textContent = event.target.value;
      appData.rollback = +event.target.value;
    };
    rollbackInput.addEventListener("change", changeRollback);
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
