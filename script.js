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

/*--------- 4 ---------*/
let a = 3;

aRow();

function aRow() {
    switch (a) {
        case 0:
            console.log('0');
            a++;
            aRow();
            break;
        case 1:
            console.log('1');
            a++;
            aRow();
            break;
        case 2:
            console.log('2');
            a++;
            aRow();
            break;
        case 3:
            console.log('3');
            a++;
            aRow();
            break;
        case 4:
            console.log('4');
            a++;
            aRow();
            break;
        case 5:
            console.log('5');
            a++;
            aRow();
            break;
        case 6:
            console.log('6');
            a++;
            aRow();
            break;
        case 7:
            console.log('7');
            a++;
            aRow();
            break;
        case 8:
            console.log('8');
            a++;
            aRow();
            break;
        case 9:
            console.log('9');
            a++;
            aRow();
            break;
        case 10:
            console.log('10');
            a++;
            aRow();
            break;
        case 11:
            console.log('11');
            a++;
            aRow();
            break;
        case 12:
            console.log('12');
            a++;
            aRow();
            break;
        case 13:
            console.log('13');
            a++;
            aRow();
            break;
        case 14:
            console.log('14');
            a++;
            aRow();
            break;
        case 15:
            console.log('15');
            a++;
            aRow();
            break;
        default:
            break;

    }
}

/*--------- 5, 6 ---------*/

alert('action 5 & 6 is ' + act6(5, 5, 2));

function act6(a, b, c) {
    switch (c) {
        case 0:
            return (a + b);
        case 1:
            return (a - b);
        case 2:
            return (a * b);
        case 3:
            return (a / b);

    }
}