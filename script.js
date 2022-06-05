'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: '',
    adaptive: true,
    service1: 0,
    service2: 0,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    start: function () {
        appData.asking();
        appData.allServicePrices = getAllServicePrice();
        appData.fullPrice = getFullPrice();
        appData.servicePercentPrice = getServicePercentPrices();
        appData.title = getTitle();
        appData.rollback = appData.fullPrice * (10 / 100);
        appData.logger();
    },
    logger: function () {
        for (let key in appData) {
            console.log(key);
        }
    },
    asking: function () {

        appData.title = prompt("Как называется Ваш проект?", "Калькулятор сайта");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные");

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    }
};

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const getAllServicePrice = function () {
    let sum = 0;
    let answerPrice = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги 1 нужен?", "простой");
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги 2 нужен?", "сложный");
        }


        do {
            appData.answerPrice = prompt("Сколько это будет стоить?");
        } while (!isNumber(answerPrice));

        sum += +answerPrice;

    }

    return sum;
};

const getFullPrice = function () {
    return +appData.screenPrice + appData.allServicePrices;
};

const getTitle = function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
};

const getRollBackMesssage = function (price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%";
        case price >= 15000 && price < 30000:
            return "Даем скидку в 5%";
        case price >= 0 && price < 15000:
            return "Скидка не предусмотрена";
        case price < 0:
            return "Что то пошло не так";
    }
};

appData.start();