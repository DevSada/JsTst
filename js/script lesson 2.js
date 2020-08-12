/*--------- 1 ---------*/


function one() {
    var a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert(c); // 2 --> сначала прибавляется, затем используется
    d = b++;
    alert(d); // 1 --> сначала используется, затем прибавляется
    c = (2 + ++a);
    alert(c); // 5 --> a = 2 --> 2 + (1 + a)=5 --> 'a' сначала прибавляется
    d = (2 + b++);
    alert(d); // 4 --> b = 2 --> 2 + b = 4 --> 'b' сначала используется
    alert(a); // 3 --> прибавилась 1 два раза
    alert(b); // 3 --> прибавилась 1 два раза
}



/*--------- 2 ---------*/

function two() {
    var a = 2;
    var x = 1 + (a *= 2); // x = 1 + (a = a + 2) = 1 + (2 + 2) = 5;
}

/*--------- 3 ---------*/

alert(three(-6, 2));

function three(a, b) {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    if (Math.sign(a) === '1' && Math.sign(b) === '1') {
        return (a - b);
    } else if (Math.sign(a) === '-1' && Math.sign(b) === '-1') {
        return (a * b);
    } else if (Math.sign(a) !== Math.sign(b)) {
        return (a + b);
    }
}

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */
let a = parseInt(prompt("Enter the number from 0 to 15!"), 10);
aRow();

function aRow() {
    switch (a) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            console.log(a);
            a++;
            aRow();


    }
}

/*--------- 5 ---------*/

let result = 'results of: ';

alert(simpleMath(5, 5));

function simpleMath(a, b, c) {
    result += ' a + b = ' + (a + b);
    result += '; a - b = ' + (a - b);
    result += '; a / b = ' + (a * b);
    result += '; a * b = ' + (a / b);
    return result;

}

/*--------- 6 ---------*/

alert('action 5 & 6 is ' + mathOperation(5, 5, '-'));

function mathOperation(a, b, c) {
    switch (c) {
        case '+':
            return (a + b);
        case '-':
            return (a - b);
        case '*':
            return (a * b);
        case '/':
            return (a / b);

    }
}

/*------- 7 -----*/

alert(null == 0);

/*

### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
### 7) *Сравнить null и 0. Попробуйте объяснить результат. 
### 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/