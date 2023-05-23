/* TYPE 1.
const t = setInterval(move, 20); // запускает функцию move каждые 20милисекунд
let pos = 0;

let flag = true;
const box = document.getElementById('box');

// clearInterval(t);  // остановить функцию setInterval
function move() {
   // pos++;  type 1
    if (pos === 150) {
        flag = false;
    }

    if (pos === 0) {
   
        flag = true;
    }

    if (flag) {    
        pos++;
    } else {
        pos --;
    }

    box.style.left = pos + 'px';
    box.style.top = pos + 'px';


}
*/

/* TYPE 2.

const t = setInterval(move, 20); // запускает функцию move каждые 20милисекунд
let pos = 0;

let flag = false;
const box = document.getElementById('box');


function move() {
    // pos++;  type 1
     if (pos === 0 || pos ===150) {
         flag = !flag;
     }
 
     
     flag ? pos++ : pos--;
 
     box.style.left = pos + 'px';
     box.style.top = pos + 'px';
}
*/


// Type-3;
const t = setInterval(move, 20); // запускает функцию move каждые 20милисекунд
let pos = 0;
let dir = 1;
const box = document.getElementById('box');


function move() {

    pos += dir;  // pos = pos + dir;

    //pos === 0 || pos === 150 ? dir * = -1 : dir ;
     if (pos === 0 || pos === 150) {
         dir *= -1;  // dir = dir * -1; умножаем
     }

     
    
     
     box.style.left = pos + 'px';
     box.style.top = pos + 'px';
}

console.log(new Date)

setInterval(primeTime, 1000);

function primeTime() {
    const d = new Date();
    const h = d.getHours() > 9 ? d.getHours() : +('0' + d.getHours());
    const m = d.getMinutes()> 9 ? d.getMinutes() : +('0' + d.getMinutes());
    const s = d.getSeconds()> 9 ? d.getSeconds() : +('0' + d.getSeconds());
    const time = `${h} : ${m} : ${s}`;

    const timeBox = document.getElementById('time');
    timeBox.innerText = time;

  /*  const h1 = document.createElement('h1');
    h1.innerText = time;

    h1.style.margin= '10px auto 0';
    h1.style.width= 'fit-content';

    //console.log(document.body.children)
    //document.body-appendChild(h1);
    if (document.body.children == 2) {
        document.body.appendChild(h1)
 
    } else {
        document.body.removeChild(h1,document.body.lastElementChild)
    }

    if (!document.querySelector("")) {
        document.body.appendChild(h1)
 
    } else {
        document.body.removeChild(h1,document.body.lastElementChild)
    }
    */

}




/*
=  - присвоение
==   не строгое стравнение (стравнение значений не учитывает типы данных);
===  строгое сравнение (с учётом типов данных);

Сложение числа и строки называется конкатинацией.
Результатом будет слипшаяся строчка.
*/