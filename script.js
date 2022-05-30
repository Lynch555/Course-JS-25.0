'use strict';

let answer1 = prompt('Как называется ваш проект?', '"Project1" - обязательное поле* ');
console.log(answer1);
let title = answer1;


let answer2 = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(answer2);
let screens = answer2;

let answer3 = prompt('Сколько будет стоить данная работа?', '12000');
console.log(answer3);
let screenPrice = answer3;

let answer4 = confirm("Нужен ли адаптив на сайте?");
console.log(answer4);
let adaptive = answer4;


let service1 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service1);

let servicePrice1 = prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service2);

let servicePrice2 = prompt('Сколько это будет стоить?');
console.log(servicePrice2);


let fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);

let rollback = fullPrice / 100 * 10;

let servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice > 15000 < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 0) {
    console.log("Что то пошло не так");
}