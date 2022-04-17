const key_CE = document.querySelector('#key_CE');
const key_DEL = document.querySelector('#key_DEL');
const key_x = document.querySelector('#key_x');
const key_division = document.querySelector('#key_division');
const key_7 = document.querySelector('#key_7');
const key_8 = document.querySelector('#key_8');
const key_9 = document.querySelector('#key_9');
const key_multiplication = document.querySelector('#key_mult');
const key_4 = document.querySelector('#key_4');
const key_5 = document.querySelector('#key_5');
const key_6 = document.querySelector('#key_6');
const key_substract = document.querySelector('#key_rest');
const key_1 = document.querySelector('#key_1');
const key_2 = document.querySelector('#key_2');
const key_3 = document.querySelector('#key_3');
const key_sum = document.querySelector('#key_sum');
const key_pos_neg = document.querySelector('#key_pos_neg');
const key_0 = document.querySelector('#key_0');
const key_point = document.querySelector('#key_point');
const key_equal = document.querySelector('#key_equal');
const inputResult = document.querySelector('.div_input');


key_CE.addEventListener('click', () => {
    inputResult.value = '';
});  
 
key_sum.addEventListener('click', () => {
    inputResult.value += '+';
}); 

key_pos_neg.addEventListener('click', () => {
    inputResult.value += '-';
}); 

key_substract.addEventListener('click', () => {
    inputResult.value += '-';
}); 

key_multiplication.addEventListener('click', () => {
    inputResult.value += '*';
})

key_division.addEventListener('click', () => {
    inputResult.value += '/';
}); 

key_point.addEventListener('click', () => {
    inputResult.value += '.';
})

key_0.addEventListener('click', () => {
    inputResult.value += '0';
}); 

key_1.addEventListener('click', () => {
    inputResult.value += '1';
}); 

key_2.addEventListener('click', () => {
    inputResult.value += '2';
}); 

key_3.addEventListener('click', () => {
    inputResult.value += '3';
}); 

key_4.addEventListener('click', () => {
    inputResult.value += '4';
}); 

key_5.addEventListener('click', () => {
    inputResult.value += '5';
}); 

key_6.addEventListener('click', () => {
    inputResult.value += '6';
}); 

key_7.addEventListener('click', () => {
    inputResult.value += '7';
}); 

key_8.addEventListener('click', () => {
    inputResult.value += '8';
}); 

key_9.addEventListener('click', () => {
    inputResult.value += '9';
}); 

key_equal.addEventListener('click', () => {
    inputResult.value += '=' + eval(inputResult.value);
});

key_DEL.addEventListener('click', () => {
    inputResult.value = inputResult.value.substring(0, inputResult.value.length - 1);
});

key_x.addEventListener('click', () => {
    alert("Estás a punto de cerrar Calculadora. ¿Estás segur@?");
    window.close();
}); 

inputResult.addEventListener('keypress', validationOnlyNumbersAndSigns)
function validationOnlyNumbersAndSigns(event) {
    if ((event.keyCode < 42) || (event.keyCode > 57)) 
     event.returnValue = false;
   }