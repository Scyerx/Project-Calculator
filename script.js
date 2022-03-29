const  btnClear = document.getElementById("btnClear");
const  btnDelete = document.getElementById("btnDelete");
const  btn1 = document.getElementById("btn1");
const  btn2 = document.getElementById("btn2");
const  btn3 = document.getElementById("btn3");
const  btn4 = document.getElementById("btn4");
const  btn5 = document.getElementById("btn5");
const  btn6 = document.getElementById("btn6");
const  btn7 = document.getElementById("btn7");
const  btn8 = document.getElementById("btn8");
const  btn9 = document.getElementById("btn9");
const  btn0 = document.getElementById("btn0");
const  btnAdd = document.getElementById("btnAdd");
const  btnSub = document.getElementById("btnSub");
const  btnMult = document.getElementById("btnMult");
const  btnDiv = document.getElementById("btnDiv");
const  btnPoint = document.getElementById("btnPoint");
const  btnEqual = document.getElementById("btnEqual");
const  display = document.getElementById("display");
let operator = "";
let previuosNumber = "";
let currentNumber = "";

btn1.onclick = function(){
    currentNumber = currentNumber + "1"
    display.textContent = currentNumber;
}

btn2.onclick = function(){
    currentNumber = currentNumber + "2"
    display.textContent = currentNumber;
}

btn3.onclick = function(){
    currentNumber = currentNumber + "3"
    display.textContent = currentNumber;
}

btn4.onclick = function(){
    currentNumber = currentNumber + "4"
    display.textContent = currentNumber;
}

btn5.onclick = function(){
    currentNumber = currentNumber + "5"
    display.textContent = currentNumber;
}

btn6.onclick = function(){
    currentNumber = currentNumber + "6"
    display.textContent = currentNumber;
}

btn7.onclick = function(){
    currentNumber = currentNumber + "7"
    display.textContent = currentNumber;
}

btn8.onclick = function(){
    currentNumber = currentNumber + "8"
    display.textContent = currentNumber;
}

btn9.onclick = function(){
    currentNumber = currentNumber + "9"
    display.textContent = currentNumber;
}

btn0.onclick = function(){
    currentNumber = currentNumber + "0"
    display.textContent = currentNumber;
}

btnPoint.onclick = function(){
    currentNumber = currentNumber + "."
    display.textContent = currentNumber;
}

btnClear.onclick = function(){
    previuosNumber = "";
    currentNumber = "";
    display.textContent = currentNumber;
}

btnDelete.onclick = function(){
    currentNumber = currentNumber.slice(0 , -1);
    display.textContent = currentNumber;
}

btnAdd.onclick = function(){
    operator = '+';
    previuosNumber = currentNumber;
    currentNumber = '';
}

btnSub.onclick = function(){
    operator = '-';
    previuosNumber = currentNumber;
    currentNumber = '';
}

btnMult.onclick = function(){
    operator = '*';
    previuosNumber = currentNumber;
    currentNumber = '';
}

btnDiv.onclick = function(){
    operator = '/';
    previuosNumber = currentNumber;
    currentNumber = '';
}

btnEqual.onclick = function(){
    if (operator == '+') {
        currentNumber = parseFloat(currentNumber) + parseFloat(previuosNumber);        
    } else if (operator == '-' && previuosNumber !== '') {
        currentNumber = parseFloat(previuosNumber) - parseFloat(currentNumber);
    } else if (operator == '-') {
        currentNumber = - parseFloat(currentNumber);
    } else if (operator == '*') {
        currentNumber = parseFloat(currentNumber) * parseFloat(previuosNumber)
    } else if (operator == '/') {
        currentNumber = parseFloat(previuosNumber) / parseFloat(currentNumber);
    }
    display.textContent = currentNumber;
}