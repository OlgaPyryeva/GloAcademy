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
    this.addTitle();
    countBtn.addEventListener("click", this.checkBeforeCount.bind(this));
    plusBtn.addEventListener("click", this.addScreenBlock.bind(this));
    resetBtn.addEventListener("click", this.reset.bind(this));
    this.getRollback();
  },
  addTitle: function () {
    document.title = htmlTitle.textContent;
  },
  start: function () {
    this.addServices();
    this.addPrices();
    this.showResult();
    this.logger();
  },
  reset: function () {
    this.hideBtn();
    this.removeElement();
    this.cleanFields();
    this.disableInputs();
  },

  cleanFields: function () {
    priceInput.value = 0;
    priceServises.value = 0;
    fullCount.value = 0;
    rollbackCount.value = 0;
    countScreens.value = 0;

    const checkBox = document.querySelectorAll("input[type=checkbox]");
    checkBox.forEach((items) => {
      items.checked = false;
    });
  },

  checkBeforeCount: function () {
    if (appData.addScreens() !== true) {
      this.screens = [];
      alert("не введен тип или кол-во экранов");
    } else {
      this.start();
      this.disableInputs();
      this.hideBtn();
    }
  },

  disableInputs: function () {
    const allLeftInputs = document.querySelectorAll(
      "input[type = 'text'] , select, .screen-btn"
    );
    allLeftInputs.forEach((item) => {
      item.disabled = true;
    });
  },

  hideBtn: function () {
    countBtn.style.display =
      countBtn.style.display == "none" ? "block" : "none";
    resetBtn.style.display =
      resetBtn.style.display == "none" ? "block" : "none";
  },
  removeElement: function () {
    let elems = document.querySelectorAll(".screen");
    for (let i = elems.length - 1; i > 0; i--) {
      elems[i].remove();
    }
  },

  showResult: function () {
    priceInput.value = this.screenPrice;
    priceServises.value = this.servicePricesPercent + this.servicePricesNumber;
    fullCount.value = this.fullPrice;
    rollbackCount.value = this.servicePercentPrice;
    countScreens.value = this.screenCount;
  },
  addScreens: function () {
    screenBlocks = document.querySelectorAll(".screen");
    screenBlocks.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        count: +input.value,
        price: +select.value * +input.value,
      });
    });
    if (this.screens.find((item) => item.price === 0)) {
      return false;
    } else {
      return true;
    }
  },
  addServices: function () {
    numberElem.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });

    percentElem.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screenBlocks[0].cloneNode(true);
    screenBlocks[screenBlocks.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let screen of this.screens) {
      this.screenCount += +screen.count;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice =
      this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
  },

  getRollback: function () {
    const changeRollback = (event) => {
      rollbackSpan.textContent = event.target.value;
      this.rollback = +event.target.value;
    };
    rollbackInput.addEventListener("change", changeRollback);
  },

  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
};

appData.init();
