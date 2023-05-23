console.log('Hello world');
let x;
console.log(x);
x = 7;
x ='bye';
console.log(x);

const pi = 3.1415926;
//pi = 3.14; // в константе const нельзя переопределять. надо как изначально прописал

let y = x;
console.log(y);

console.log('pi = ' + pi);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2; //остаток от деления 
console.log(`res = ${res}`);

res = 'true' + 5; 
console.log(`res = ${res}`);

res = true + 5;  // false - 0 , true -1
console.log(`res = ${res}`);

x = '2' === 2;
console.log(`x = ${x}`);

res = '5';
res = 5 + ''; // String(5) - '5'

switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;
    case5:
        console.log(`string: ${res}`);
        break;
    default:
        console.log('Not a 5');    
}

let age = 17;
let vol = age > 17 ? 42 : 1.5;
console.log(`vol = ${vol}`);


console.log(+pi.toFixed(2));


res = -age;
console.log(res);

++age; // Вначале прибаляем 1 потом используем значение age
age++; // Вначале  используем значение age  потом прибаляем 1

x = 10;
res = x++ + ++x; // res = 10 + 12 = 22



console.log(typeof age);
age = '5';
console.log(typeof age);
age = true;
console.log(typeof age);
age = undefined;
console.log(typeof age);
age = null;
console.log(typeof age);

x = 10;
y = 5;
res = add(x, y);
console.log(`res = ${res}`);

function add(a, b) {
    return a + b;
}

x = !!x; // неявное приведение переменной к boolean значению
console.log(x); //любое число будет true, кроме 0 (false)

let example = 'hello';
console.log(!!example);

// false = null, undefined, Nan, 0,  -0, false, ''  на собеседование

let userName = null;
let nickName = userName || 'Anonymous';
//console.log(nickName);
greeting();
greeting('Rabindranat');

function greeting(nickName1 = 'Anonymous') {
    //nickName1 = nickName1 || 'Anonymous';
    console.log(`Hello ${nickName1}`);

}

//int[] arr = new int[5];
//int[] arr = {2, 3, 4, 5};

const arr = [1, 2, 3, 'four', 'five', true]
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
arr[3] = 4;
console.log(arr[3]);
console.log(arr.length);
arr[10] = 100500;
console.log(arr[10]);
console.log(arr[9]);
arr.length = 3;
console.log(arr);

function printArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log (arr[i]);
        
    }
    
}

// homework

res = sumDigits(1234);
console.log(`res = ${res}`); // res = 10;
res = luckyNumber(123411); 1 + 2 + 3 == 8 + 7 + 1;
// res = luckyNumber(1234871); 1 + 2 + 3 == 3 + 2 + 1;

console.log(res ? 'Lucky' : 'Unlucky')

// ('' + x).split('')
// charAt()
// 1234 % 10 = 4
// (1234 - 4) / 10
// 123


// type-1
/*function sumDigits(x) {
    let sum = 0;
    while(x) {
        sum += x % 10;
        x = (x - x % 10) / 10
    }
    return sum;
    // TODO
   
}*/
// type- 2
function sumDigits(x) {
    let sum = 0;
    let str = ' + x;'
    for (let i = 0; i < (''+x).length; i++) {
        sum += +str[i];    
    }
    return sum;   
}

// type 3 arr
/*function sumDigits(x) {
    let arr = ('' +x).split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];  
    }
    return sum;
    
}
*/

/*
function luckyNumber(x) {
    if ( typeof +x !== 'number' || x < 100) return false;
    const numberLength = ('' + x ).length;
    //const mid = numberLength % 2 === 0 ? numberLength / 2 : (numberLength -1) / 2;
    const mid  = Math.floor(numberLength / 2);
    const subStr1 = ('' + x).substring(0, mid); // (start, finish) - start входит новую подстроку finish невходит
   // const subStr2 = numberLength % 2 === 0 ? ('' + x).substring(mid) : ('' + )
    const subStr2 =  ('' + x).substring(numberLength - mid);
    return sumDigits(+subStr1) === sumDigits(+subStr2);
 }   */


function luckyNumber(x) {
    if (typeof +x !== 'number' || x < 100  ) return false;
    const str = (''+x);
    const mid = Math.floor(('' + x).length / 2);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < mid; i++) {
        leftSum  += +(''+x)[i];
        rightSum += +(''+x) [(''+x).length - i -1]; // пузырьковая сортировка
    }
    return leftSum === rightSum;
     
        
    
    
} 
   
    
   


console.log(banana());

function banana() {
    let a = 'a';
    let b = 'b';
   // console.log(a * b);
    return (b+a+( a*b)+a).toLowerCase();
    //TODO
    
}

// 'b', 'a' => banana;

let arr5 = [1,2,3,6,5,4];

function bubbleSort(arr) {
    let counterI = 0;
    let counterJ = 0;

    for (let i = 0; i < arr.length -1; i++) {
        counterI++;
        for (let j = 0; j < arr.length -1 -i; j++) {
            counterJ++;
           if (arr[j] - arr[j+1] > 0) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }        
        }
    }     
}
bubbleSort(arr5);
console.log(arr5, counterI, counterJ);







