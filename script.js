' use strict';

let getAllServicePrices = function (service1, service2) {
    return service1 + service2;
};
let allServicePrices = getAllServicePrices(1000, 3000);

let fullPrice;

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;

}
fullPrice = getFullPrice(1000, 2000);

let getTitle = ' title';

getTitle = getTitle.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function (m) {
    return m.toUpperCase();
});

function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - rollback;
}
let servicePercentPrice = getFullPrice - (rollback = (fullPrice / 100 * 10));
console.log(servicePercentPrice);

console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle);
console.log(servicePercentPrice);
console.log(getRollbackMessage);