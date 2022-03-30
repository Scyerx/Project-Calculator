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

let currentOperator = "";
let previousOperator = "";
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
    if (currentNumber.includes('.')) {
        this.removeAttributeNS;
    } else {
        currentNumber = currentNumber + "."
        display.textContent = currentNumber;
    }
}

btnClear.onclick = function(){
    previuosNumber = "";
    currentNumber = "";
    currentOperator = "";    
    display.textContent = currentNumber;
}

btnDelete.onclick = function(){
    currentNumber = currentNumber.slice(0 , -1);
    display.textContent = currentNumber;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

btnEqual.onclick = function() {
    if (currentNumber == '' || previuosNumber == '') {
        return
    } else {
        currentNumber = calculate(previuosNumber, currentNumber, currentOperator)
    }
    currentOperator = ''
    display.textContent = currentNumber;
    previuosNumber = ''
}

btnAdd.onclick = function(){
    if (currentOperator !== '') {
        currentNumber = calculate(previuosNumber, currentNumber, currentOperator);
        display.textContent = currentNumber;
    } 
    currentOperator = '+'
    previuosNumber = currentNumber;
    currentNumber = ''
}

btnSub.onclick = function() {
    if (currentOperator !== '') {
        currentNumber = calculate(previuosNumber, currentNumber, currentOperator);
        display.textContent = currentNumber;
    } 
    currentOperator = '-'
    previuosNumber = currentNumber;
    currentNumber = ''
}

btnMult.onclick = function() {
    if (currentOperator !== '') {
        currentNumber = calculate(previuosNumber, currentNumber, currentOperator);
        display.textContent = currentNumber;
    } 
    currentOperator = '*'
    previuosNumber = currentNumber;
    currentNumber = ''
}

btnDiv.onclick = function() {
    if (currentOperator !== '') {
        currentNumber = calculate(previuosNumber, currentNumber, currentOperator);
        display.textContent = currentNumber;
    } 
    currentOperator = '/'
    previuosNumber = currentNumber;
    currentNumber = ''
}


function calculate (previuosNumber,currentNumber, currentOperator) {
    if (currentOperator == '+') {
        currentNumber = add (parseFloat(previuosNumber), parseFloat(currentNumber))  
        return currentNumber;      
    } else if (currentOperator == '-') {
        currentNumber = subtract (parseFloat(previuosNumber),parseFloat(currentNumber))  
        return currentNumber;      
    } else if (currentOperator == '*') {
        currentNumber = multiply (parseFloat(previuosNumber),parseFloat(currentNumber))  
        return currentNumber;      
    } else if (currentOperator == '/') {
        currentNumber = divide (parseFloat(previuosNumber),parseFloat(currentNumber))  
        return currentNumber;      
    } 
}