//Комментарии такие же как и в css
    /* Это многострочный
    комментарий*/
    // Закомментить Ctrl + /
// Переменная
/*
alert('This is me, motherfuckers!');
let myAge;
myAge = 36; 

// Литерал - константа (число/текст)
let qwe;
let asd;

qwe = 5;
asd = 7;

let a, b, c;
a = b = c = 15;
let qwe = 5;
let asd = 7;   или так

console.log(qwe + asd);
console.log(a + asd, b);
console.log("a = ", a, ", ", "b = ", b);
console.log(console);
let a = 10;
console.log(a);
console.log(typeof a); //тип переменной (эта number)
let b = Infinity; //бесконечное значение (также -Infinity)
console.log(b);
console.log(typeof b);
// NaN  Not a Number - не число
// Экранирование - \ обратный слэш, один
// \n перенос на новую строку   \t табуляция 
// ${b}  - внедрение, строковой шаблон
// let a = null; пустое значение
// let a = undefined; 
let sym = Symbol();*/
// Объекты
// let car = {}; // Создали пустой объект
// let car = {
//     color: 'green',
//     maxSpeed: 250,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     }
// };
// console.log(car);
// console.log(typeof car);
// console.log(car.color); //Вывести конкретное свойство
// car.color = 'red'; 
// console.log(car.color); 
// car['color'] = 'blue'; 
// console.log(car.color);
// //Без кавычек
// let carProp = 'color';
// car[carProp] = 'yellow';
// console.log(car.color);
// console.log(car.audio.spea);
let carYellow = {
        color: 'yellow',
        mark: 'Ford'
    };
console.log(carYellow.color);
let carRed = {
    color: 'red',
    mark: 'Ford'
};
console.log(carRed.color);
carYellow.color = carRed.color;
console.log(carYellow.color);