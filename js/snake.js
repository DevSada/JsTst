const boardSize = 10
const hardLevel = 3
let snake = []


function snake() {

    // tmm defenition
    const startX = 9
    const startY = Math.round(boardSize / 2)
    snakeBoard(boardSize)

    snakeModel(startX, startY, 'right', boardSize, 4)
    makeBunny(hardLevel, startX, startY)

}

function snakeModel(startX, startY, direction, boardSize, snakeSize) {
    let x = startX
    let y = startY
    for (i = 0; i < snakeSize; i++) {
        switch (direction) {
            case 'up': // to 0
                y = snakeMove('increase', i, y, boardSize)
                break
            case 'down': // to boardSize
                y = snakeMove('decrease', i, y, boardSize)
                break
            case 'left':
                x = snakeMove('increase', i, x, boardSize)
                break
            case 'right':
                x = snakeMove('decrease', i, x, boardSize)
                break
        }
        let snake = document.getElementsByClassName('cell-' + x + '-' + y)[0]

        snake.classList.add('cellred')
        snake.innerText = x + ' - ' + y + '->' + i
    }
}

function snakeMove(direction, iteration, j, boardSize) {
    let snake = j
    switch (direction) {
        case 'increase':
            if (iteration === 0) { // head of snake
                if (snake === 0) {
                    snake = boardSize - 1
                } else {
                    snake -= 1
                }
            } else if ((snake + 1) === boardSize) { // body of snake
                snake = 0
            } else {
                snake += 1
            }
            break
        case 'decrease':
            if (iteration === 0) { // head of snake
                if (snake === boardSize - 1) {
                    snake = 0
                } else {
                    snake += 1
                }
            } else if (snake === 0) { // body of snake
                snake = boardSize - 1
            } else {
                snake -= 1

            }
            break
    }
    return snake
}

function snakeBoard(boardSize) {
    let board = document.getElementsByClassName('board')[0]

    for (y = 0; y < boardSize; y++) {
        for (x = 0; x < boardSize; x++) {
            const cell = document.createElement('div')
            cell.style.width = (board.offsetWidth / boardSize) + 'px'
            cell.style.height = (board.offsetWidth / boardSize) + 'px'
            cell.style.textAlign = 'center'
            cell.style.border = '0px solid red'
            cell.classList.add('cell-' + x + '-' + y)
            cell.innerText = x + ' - ' + y

            board.append(cell)
        }
    }
}

function makeBunny(hardLevel) {
    for (i = 0; i < hardLevel; i++) {
        let x = Math.round(Math.random() * 10)
        let y = Math.round(Math.random() * 10)
        let bunny = document.getElementsByClassName('cell-' + x + '-' + y)[0]

        while (true) {
            if (!bunny.classList.contains('cellblack')) {
                bunny.classList.add('cellblack')
                break;
            }
        }

    }

}

snake()


// case 'up': // to 0
//                 // if (i === 0) { // head of snake
//                 //     if (y === 0) {
//                 //         y = boardSize - 1
//                 //     } else {
//                 //         y -= 1
//                 //     }
//                 // } else if ((y + 1) === boardSize) { // body of snake
//                 //     y = 0
//                 // } else {
//                 //     y += 1
//                 // }
//                 y = snakeMove('increase', i, y, boardSize)
//                 break
//             case 'down': // to boardSize
//                 // if (i === 0) { // head of snake
//                 //     if (y === boardSize - 1) {
//                 //         y = 0
//                 //     } else {
//                 //         y += 1
//                 //     }
//                 // } else if (y === 0) { // body of snake
//                 //     y = boardSize - 1
//                 // } else {
//                 //     y -= 1

//                 // }