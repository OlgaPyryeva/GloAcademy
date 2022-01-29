const title = "My first project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 42;
const rollback = 56;
const fullPrice = 2500;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");

console.log(screens.toLowerCase().split(", "));

console.log(
  "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100)
);
