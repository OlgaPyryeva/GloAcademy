const title = "My first project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 42;
const rollback = 56;
const fullPrice = 2500;
const adaptive = true;

console.log("тип переменной title" + " : " + typeof title);
console.log("тип переменной fullPrice" + " : " + typeof fullPrice);
console.log("тип переменной adaptive" + " : " + typeof adaptive);

console.log("длинна строки screens:" + " " + screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "доллара");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");

console.log(screens.toLowerCase().split(", "));

console.log(
  "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100)
);
