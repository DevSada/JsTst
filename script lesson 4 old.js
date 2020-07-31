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

// class ProductShelf {
//     products = [];
//     addProduct(product) {

//     }
//     removeProduct(product) {

//     }
// }

class Basket extends ProductList {}
class ProductShelf extends ProductList {}
// class Basket {
//     products = [];

//     addProduct(product) {
//         this.products[this.products.length] = product
//     }

//     removeProduct(product) {
//         this.products.forEach(function(item, i, products) {
//             if (item.id === product.id) {
//                 products.splice(i, 1);
//             }
//         })

//     }

//     takeBasketList() {
//         let basketList = '';

//         this.products.forEach(function(item, i, products) {
//             basketList += item.name + ' - ' + item.cost;
//         });

//         return basketList;
//     }

//     countCost() {
//         let final = 0;
//         this.products.forEach(function(item, i, products) {
//             final += item.cost;
//         })
//         console.log(final);
//         return final
//     };
// }

class Fruits extends Product {}
class Berries extends Product {}
// let apples = new Fruits('apples', 117, 1);
// let bananas = new Fruits('bananas', 87, 2);
// let watermelon = new Fruits('watermelon', 94, 3);
// let cherry = new Berries('cherry', 134, 4);
// let strawberry = new Berries('strawberry', 56, 5);



let cart = new Basket();
let catalog = new ProductShelf();

catalog.addProduct(new Fruits('apples', 117, 1));
catalog.addProduct(new Fruits('bananas', 87, 2));
catalog.addProduct(new Fruits('watermelon', 94, 3));
catalog.addProduct(new Berries('cherry', 134, 4));
catalog.addProduct(new Berries('strawberry', 56, 5));


// cart.addProduct(apples);
// cart.addProduct(cherry);
// cart.addProduct(bananas);



// console.log(cart.takeBasketList());

// cart.removeProduct(cherry);

// console.log(cart.takeBasketList());

console.log(cart.countCost());