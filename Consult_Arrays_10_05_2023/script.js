const infoFullName = ['John', 'Doe'];
const [firstName, lastName] = infoFullName; // Деструктуризация: firstName('John'), lastName('Doe')
console.log(firstName, lastName);

const numbers = [1, 2, 3, 4];
const [first, , , fourth] = numbers;
console.log(first, fourth);

const book = [ "1", "Theodore Dreiser", "Finansist", 1912 ];
const [isbn, author, title, year] = book;
console.log(isbn, author, title, year);

const [a, b, ...rest] = numbers; // [1, 2, 3, 4] 1-a , b-2 ,...rest это остаток 3,4
console.log(a, b, rest); // a =1, b=2, rest =[3,4]

console.log('===== Spread syntax =====');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(arr1, arr2);
console.log(newArr);

arr1 = ['a', 'b', 'c'];
arr2 = [...arr1, 'd', 'e', 'f'];
console.log(arr2);

console.log("===== Array's methods =====");

arr1 = [ 1, 2, 3];
let res = arr1.push(5);//добавляет элемент в конец массива вовращает новую длину массива
console.log(arr1); // 1, 2, 3, 5
console.log(res); // 4

res = arr1.pop();// удаляет эдемент в конце массива возвращаент удвленный элемент
console.log(arr1); // 1, 2, 3
console.log(res); // 5

res = arr1.shift();// удаляет эдемент вначале массива возвращает удвленный элемент
console.log(arr1); // 2, 3
console.log(res); // 1

res = arr1.unshift(0);// добавляет элемент вначало массива вовращает удаленный массива
console.log(arr1); // 0, 2, 3
console.log(res); // 3

res = arr1.splice(1, 2, 8, 9, 10);// удаляет  элемент из исходного массива вовращает новую длину массива
console.log(arr1); // 0, 8, 9, 10
console.log(res); // 2, 3

res = arr1.slice(1, 3);// zне изменяет исходный массив вовращает удаленный массива
console.log(arr1); // 0, 8, 9, 10
console.log(res); // 8, 9

const combArray = arr1.concat(arr2);
console.log(arr1); // 0, 8, 9, 10
console.log(arr2); // 'a', 'b', 'c', 'd', 'e', 'f'
console.log(combArray); // 0, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f'

