'use strict'

alert( 'Я JavaScript!' );

let admin
let name
admin = 'john'
name = admin
alert(name)

let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

let name = prompt('как вас зовут?', []);
alert(name);

let a = 1, b = 1;
let c = ++a; // c 2, a 2
let d = b++; // d 1, b 2

let a = 2;
let x = 1 + (a *= 2);// a 4, x 5

"" + 1 + 0 // = "10"
"" - 1 + 0 // = -1
true + false//  = 1
6 / "3"//  = 2
"2" * "3"//  = 6
4 + 5 + "px"//  = "9px"
"$" + 4 + 5//  = "$45"
"4" - 2 // = 2
"4px" - 2 // = NaN
"  -9  " + 5//  = "  -9  5"
"  -9  " - 5//  = -14
null + 1//  = 1 // (5)
undefined + 1//  = NaN
" \t \n" - 2//  = -2

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b);

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

if ("0") {
    alert( 'Привет' );
}// выведется

let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

let value = prompt('Введите число', 0);
if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

alert( null || 2 || undefined );// 2
alert( alert(1) || 2 || alert(3) );//1,2
alert( 1 && null && 2 );//null
alert( alert(1) && alert(2) );//1, undefined
alert( null || 2 && 3 || 4 );//3
if (age >= 14 && age <= 90)
if (age < 14 || age > 90)
if (-1 || 0) alert( 'first' );//выполнится
if (-1 && 0) alert( 'second' );//не выполнится
if (null || -1 && 1) alert( 'third' );//выполнится
let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}

let i = 3;
while (i) {
    alert( i-- );
}//1
let i = 0;
while (i++ < 5) alert( i );//1-5
for (let i = 0; i < 5; ++i) alert( i );//1-4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
let n = 10;
metka:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue metka;
        }
        alert( i );
    }

if(browser == 'Edge'){
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}

//работают одинаково
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
function min(a, b) {
    return a < b ? a : b;
}
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
    alert(`нужно целое число а не ${n} `);
} else {
    alert( pow(x, n) );
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);