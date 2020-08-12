// class Pet {
//     name = ''

//     constructor(n) {

//     }

//     eat() {
//         console.log('create eat')
//     }
// }

// class Cat extends Pet {
//     constructor(n) {
//         super()
//         this.name = n
//     }
// }

// const c = new Cat('Alice')
// console.log(c)


// --------------- 1 -----------------

const retObj = {}

function numToObj() {
    if (number > 999 || number < 0) {
        console.log('Enter number from 1 to 999!')
    } else {
        retObj.units = number % 10;
        lastNum();
        retObj.ten = number % 10;
        lastNum();
        retObj.hundreds = number % 10;
    }
    return retObj;
}

function lastNum() {
    number = Math.floor(number / 10);
    return number;
}

let number = 478 //parseInt(prompt('Enter number from 1 to 999'), 10);
numToObj();
console.log(retObj);

//----------------------------------------------------------

class Product {

    constructor(name, cost, id) {
        this.name = name;
        this.cost = cost;
        this.id = id;
    }
}

class ProductList {
    products = [];

    addProduct(product) {
        this.products[this.products.length] = product
    }

    removeProduct(product) {
        this.products.forEach(function(item, i, products) {
            if (item.id === product.id) {
                products.splice(i, 1);
            }
        })

    }

    takeList() {
        let prodList = '';

        this.products.forEach(function(item, i, products) {
            prodList += item.name + ' - ' + item.cost;
        });

        return prodList;
    }

    countCost() {
        let final = 0;
        this.products.forEach(function(item, i, products) {
            final += item.cost;
        })

        return final
    };
}


class Basket extends ProductList {}
class ProductShelf extends ProductList {}

class Fruits extends Product {}
class Berries extends Product {}


let cart = new Basket();
let catalog = new ProductShelf();

catalog.addProduct(new Fruits('apples', 117, 1));
catalog.addProduct(new Fruits('bananas', 87, 2));
catalog.addProduct(new Fruits('watermelon', 94, 3));
catalog.addProduct(new Berries('cherry', 134, 4));
catalog.addProduct(new Berries('strawberry', 56, 5));

console.log(cart.countCost());

//alert(`${apples} + ${oranges} = ${apples + oranges}`);