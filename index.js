var num = ''
let num1
let num2
let operation

const display = document.getElementById('display')
const one = document.getElementById('1');
one.addEventListener('click', () => {
    display.innerHTML += '1';
    num+='1'
    
})

const two = document.getElementById('2');
two.addEventListener('click', () => {
    display.innerHTML += '2';
    num+='2'
})

const three = document.getElementById('3');
three.addEventListener('click', () => {
    display.innerHTML += '3';
    num+='3'
})

const four = document.getElementById('4');
four.addEventListener('click', () => {
    display.innerHTML += '4';
    num+='4'
})

const five = document.getElementById('5');
five.addEventListener('click', () => {
    display.innerHTML += '5';
    num+='5'
})

const six = document.getElementById('6');
six.addEventListener('click', () => {
    display.innerHTML += '6';
    num+='6'
})

const seven = document.getElementById('7');
seven.addEventListener('click', () => {
    display.innerHTML += '7';
    num+='7'
})

const eight = document.getElementById('8');
eight.addEventListener('click', () => {
    display.innerHTML += '8';
    num+='8'
})

const nine = document.getElementById('9');
nine.addEventListener('click', () => {
    display.innerHTML += '9';
    num+='9'
})

const zero = document.getElementById('0');
zero.addEventListener('click', () => {
    display.innerHTML += '0';
    num+='0'
    
})

const add = document.getElementById('add');
add.addEventListener('click', () => {
    display.innerHTML = ' ';
    num1 = parseInt(num);
    num = ''
    operation = 'add'
})

function addition (num1, num2) {
    result = num1 + num2
    return result
}

const sub = document.getElementById('sub');
sub.addEventListener('click', () => {
    display.innerHTML = ' ';
    num1 = parseInt(num);
    num = ''
    operation = 'sub'
})

function subtract (num1, num2) {
    result = num1 - num2
    return result
}

const mul = document.getElementById('mul');
mul.addEventListener('click', () => {
    display.innerHTML = ' ';
    num1 = parseInt(num);
    num = ''
    operation = 'mul'
})

function multiply (num1, num2) {
    result = num1 * num2
    return result
}

const div = document.getElementById('div');
div.addEventListener('click', () => {
    display.innerHTML = ' ';
    num1 = parseInt(num);
    num =  '';
    operation = 'div';
})

function divide (num1, num2) {
    result = num1/num2
    return result
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    display.innerHTML = '';
    num = ''
    num1 = 0
    num2 = 0
})

const eval = document.getElementById('eval');
eval.addEventListener('click', () => {
    display.innerHTML = ' ';
    num2 = parseInt(num);
    num = '';
    switch(operation){
        case 'add':
            display.innerHTML += addition(num1, num2);
            break;
        case 'sub':
            display.innerHTML += subtract(num1, num2);
            break;
        case 'mul':
            display.innerHTML += multiply(num1, num2);
            break;
        case 'div':
            display.innerHTML += divide(num1, num2);
            break
        
    }
})
