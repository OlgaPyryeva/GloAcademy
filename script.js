let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

title = "My first project";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 42;
rollback = 56;
fullPrice = 2500;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

let screensPrice =
  "Стоимость верстки экранов" +
  " " +
  screenPrice +
  " " +
  "рублей/ долларов/ гривен/ юани";
let workPrice =
  "Стоимость разработки сайта" +
  " " +
  fullPrice +
  " " +
  "рублей/ долларов/ гривен/ юани";
console.log(screensPrice);
console.log(workPrice);

screens = screens.toLowerCase();
console.log(screens.split(", "));

let workPercentage =
  "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100);
console.log(workPercentage);
