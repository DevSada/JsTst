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

class Product {

    constructor(name, cost, id, prodType) {
        this.prodType = prodType
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

function listGen(section) {
    let list = document.getElementsByClassName(section)[0]
    let cartLst = document.getElementsByClassName('cart')[0]
    let tmpTxt
    let listType
    let listHeader = document.createElement("div")
    let listFooter = document.createElement("div")
    let btnCart = document.createElement("div")

    let itemWrap = document.createElement("div")
    let prodType = document.createElement("div")
    let prodName = document.createElement("div")
    let prodCost = document.createElement("div")
    let prodBtn = document.createElement("div")

    list.innerHTML = ''

    btnCart.innerHTML = "<img src='img/cart.png'>"
    btnCart.classList.add("btn-cart", "btn", "txt-center")
    btnCart.addEventListener("click", function() {
        if (cartLst.style.display === "none") {
            cartLst.style.display = "flex"
            document.getElementsByClassName('cart-header')[0].append(btnCart)
        } else {
            cartLst.style.display = "none"
            document.getElementsByClassName('wrapper')[0].append(btnCart)
        }

    })


    listHeader.classList.add("list-header", "txt-center")
    listHeader.innerText = section

    if (section === "catalog") { //ProductShelf
        tmpTxt = "<img src='img/cart-add.png'>"
        listType = catalog

        prodName = document.createElement("input")
        prodCost = document.createElement("input")

        listFooter.classList.add("item-wrap")
        prodType.classList.add("txt-center")
        prodName.classList.add("product-cell", "txt-center", "product-new")
        prodCost.classList.add("txt-center", "cost-new")
        prodBtn.classList.add("btn", "txt-center")


        prodType.innerHTML = `<select id='product-type' name='product-type' class='type-new'>
        <option value='fruits'>fruits</option>
        <option value='berries'>berries</option>        
        </select>`

        prodBtn.innerHTML = "<img src='img/prod-new.png'>"


        prodBtn.addEventListener("click", function() {

            if (document.getElementsByClassName('cost-new')[0].value !== '' && document.getElementsByClassName('product-new')[0].value !== '')
                switch (document.getElementsByClassName('type-new')[0].value) {
                    case 'berries':
                        catalog.addProduct(new Berries(
                            document.getElementsByClassName('product-new')[0].value,
                            document.getElementsByClassName('cost-new')[0].value,
                            catalog.products.length + 1,
                            document.getElementsByClassName('type-new')[0].value
                        ));
                        break
                    case 'fruits':
                        catalog.addProduct(new Fruits(
                            document.getElementsByClassName('product-new')[0].value,
                            document.getElementsByClassName('cost-new')[0].value,
                            catalog.products.length + 1,
                            document.getElementsByClassName('type-new')[0].value
                        ));
                        break
                }
            listGen("catalog")
            listGen("cart")

        })

        listFooter.append(prodType)
        listFooter.append(prodName)
        listFooter.append(prodCost)
        listFooter.append(prodBtn)

    } else if (section === "cart") { //Basket
        tmpTxt = "<img src='img/cart-remove.png'>"
        listType = cart

        itemWrap.classList.add("cart-header")

        itemWrap.append(listHeader)
        if (!document.getElementsByClassName('btn-cart')[0]) itemWrap.append(btnCart)
        if (cart.countCost() === 0) {
            listFooter.classList.add('list-header', "txt-center")
            listFooter.innerText = 'The cart is empty'
        } else {
            listFooter.classList.add("list-cost")
            listFooter.innerText = cart.countCost()
        }
    }

    if (section === "catalog") { list.append(listHeader) } else { list.append(itemWrap) }

    listType.products.forEach(function(item, i, products) {
        itemWrap = document.createElement("div")
        prodType = document.createElement("div")
        prodName = document.createElement("div")
        prodCost = document.createElement("div")
        prodBtn = document.createElement("div")

        itemWrap.classList.add("item-wrap")
        prodType.classList.add("txt-center")
        prodName.classList.add("product-cell", "txt-center")
        prodCost.classList.add("txt-center")
        prodBtn.classList.add("btn", "txt-center")


        prodType.innerHTML = "<img src='img/" + item.prodType + ".png'>"
        prodName.innerText = item.name
        prodCost.innerText = item.cost
        prodBtn.innerHTML = tmpTxt

        prodBtn.addEventListener("click", function() {
            if (section === "catalog") { cart.addProduct(item); } else { cart.removeProduct(item); }
            listGen("catalog")
            listGen("cart")
        })

        if (section === "catalog") itemWrap.append(prodType)
        itemWrap.append(prodName)
        itemWrap.append(prodCost)
        itemWrap.append(prodBtn)
        list.append(itemWrap)
    });

    list.append(listFooter)
}

class Basket extends ProductList {}
class ProductShelf extends ProductList {}

class Fruits extends Product {


}
class Berries extends Product {

}


let cart = new Basket();
let catalog = new ProductShelf();

catalog.addProduct(new Fruits('apples', 117, 1, 'fruits'));
catalog.addProduct(new Fruits('bananas', 87, 2, 'fruits'));
catalog.addProduct(new Fruits('watermelon', 94, 3, 'fruits'));
catalog.addProduct(new Berries('cherry', 134, 4, 'berries'));
catalog.addProduct(new Berries('strawberry', 56, 5, 'berries'));


listGen("catalog")
listGen("cart")