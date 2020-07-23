/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/
let i = 0;
while (i < 101) {
    console.log(i);
    i++;
}



/*--------- 2 ---------*/
let finalcost = 0;

let products = [
    [0, 'apples', 117],
    [1, 'bananas', 72],
    [2, 'watermelon', 89],
    [3, 'cherry', 134],
    [4, 'strawberry', 56],
]; // id, name, cost

let basket = [1, 0];

countBasketPrice();

function countBasketPrice() {
    basket.forEach(function(item, i, basket) {
        products.forEach(function(product, j, products) {
            if (products[j][0] === item) {
                finalcost += products[j][2];
                console.log(products[j][1] + ' - ' + products[j][2]);
            };
        });
    });
}
console.log('Final - ' + finalcost);


/*4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.*/

for (let i = 0; i < 11; console.log(i++)) {};


/*4) *Нарисовать пирамиду с помощью console.log*/

let row = 'x';

console.log(row);
for (let i = 0; i < 20; i++) {
    row += 'x';
    console.log(row);
}