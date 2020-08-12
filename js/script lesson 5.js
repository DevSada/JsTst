// const menu = ['Home', 'About', 'Media']

// const nav = document.querySelector('nav')

// if (nav) {

//     menu.forEach(link => {
//         const linkElement = document.createElement('a')
//         linkElement.innerText = link
//         linkElement.setAttribute('href', '/${link.toLowerCase}/')
//         linkElement.classList.add('link')
//         console.log(linkElement)
//         nav.appendChild(linkElement)
//     })
// }



// --------------- 1 -----------------


function chessBoard() {
    let board = document.body.getElementsByClassName('board')[0]
    const letters = "ABCDEFGH"
    let closeChessBtn = document.createElement('button')
    let openChessBtn = document.createElement('button')
    openChessBtn.innerText = "open chess"
    openChessBtn.style.display = "none"
    document.body.append(openChessBtn)
    openChessBtn.onclick = function(e) {
        board.style.display = "flex"
        openChessBtn.style.display = "none"
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (i === 0 && j === 0) {

                closeChessBtn.innerText = "hidden chess"
                closeChessBtn.onclick = function(e) {
                    board.style.display = "none"
                    openChessBtn.style.display = "block"
                }
                cell.append(closeChessBtn)
            }
            if (i === 0 && j !== 0) {
                cell.innerText = letters.substr(j - 1, 1)
                cell.style.textAlign = "center"
                cell.style.lineHeight = "2"
            } else if (j === 0 && i !== 0) {
                cell.innerText = i
                cell.style.textAlign = "center"
                cell.style.lineHeight = "2"
            } else {

                if (i % 2 !== 0 && j % 2 == 0) {
                    cell.classList.add('cellblack')
                } else if (i % 2 == 0 && j % 2 !== 0) {
                    cell.classList.add('cellblack')
                }
            }

            board.append(cell)
        }
    }
}

chessBoard()

//----------------------------------------------------------

function listGen(section) {
    let list = document.getElementsByClassName(section)[0]
    let btnTxt
    let listType
    let listHeader = document.createElement("div")
    let listFooter = document.createElement("div")
    list.innerHTML = ''

    listHeader.classList.add("list-header", "txt-center")


    if (section === "catalog") { //ProductShelf
        btnTxt = "Add"
        listType = catalog
        listHeader.innerText = 'Catalog'
    } else if (section === "cart" && cart.countCost() !== 0) { //Basket
        btnTxt = "Delete"
        listType = cart
        listFooter.classList.add("list-cost")
        listHeader.innerText = 'Cart'
        listFooter.innerText = cart.countCost()
    }

    list.append(listHeader)
    listType.products.forEach(function(item, i, products) {
        let prodImg = document.createElement("div")
        let prodName = document.createElement("div")
        let prodCost = document.createElement("div")
        let prodBtn = document.createElement("button", "txt-center")
        let prodCount = 0

        prodImg.classList.add("product-cell", "txt-center")
        prodName.classList.add("product-cell", "txt-center")
        prodCost.classList.add("product-cell", "txt-center")
        prodBtn.classList.add("product-btn", "txt-center")

        prodBtn.innerText = btnTxt
        prodBtn.onclick = function(e) {
            if (section === "catalog") { cart.addProduct(item); } else { cart.removeProduct(item); }
            listGen("catalog")
            listGen("cart")
        }


        if (section === "cart") {
            cart.products.forEach((cartItem, j, products) => {
                if (cartItem.id === item.id) {
                    prodCount += 1
                }
            })
        }

        if (prodCount > 1) {
            prodName.innerText = item.name + ' (' + prodCount + ')'
            prodCost.innerText = item.cost * prodCount
        } else {
            prodName.innerText = item.name
            prodCost.innerText = item.cost

        }
        list.append(prodImg)
        list.append(prodName)
        list.append(prodCost)
        list.append(prodBtn)
    });
    list.append(listFooter)


}
listGen("catalog")
listGen("cart")

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount);
// console.log(sum) // 118.11

// var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function(acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//         acc[curr] = 1;
//         console.log(acc + ' - ' + curr + ' - ' + acc[curr])
//     } else {
//         acc[curr] += 1;
//         console.log(acc + ' - ' + curr + ' - ' + acc[curr])
//     }

//     return acc;
// }, {});

// console.log(a)
//     // a == {2: 5, 4: 1, 5: 3, 9: 1}

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => {

// });
// console.log(sum) // 118.11

// let prodId = 2
// let prodCount = 0
// catalog.products.forEach(function(item, i, products) {
//     if (item.id === prodId) {
//         prodCount += 1
//     }

// })
// console.log(prodCount)
// let h = catalog.products.reduce(function(sum, item) {
//     console.log('start')
//     console.log(item.id)
//     if (typeof sum[item.id] == 'undefined') {
//         sum[item.id] = 1;
//         console.log(sum + ' - ' + item.id + ' - ' + sum[item.id])
//     } else {
//         sum[item.id] += 1;
//         console.log(sum + ' +1 ' + item.id + ' - ' + sum[item.id])
//     }
// });

// console.log(h)