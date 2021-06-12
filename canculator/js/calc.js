const form = document.querySelector('.form');
const submit = form.querySelector('.submit');
const number_1 = form.querySelector(`.number1`); 
const number_2 = form.querySelector(`.number2`); 
const calc = form.querySelector('.select');
const rel = document.querySelector('.result span');
const clean = document.querySelector('.clean');

let result = 0;
form.onsubmit = (e) => {
    e.preventDefault();
    let value_1 =  parseInt( number_1.value) || 0;
    let value_2 =  parseInt( number_2.value) || 0;
    let cal = calc.options[calc.selectedIndex].text;
    if(cal === '+'){
        result = value_1 + value_2
    }
    if(cal === '-'){
        result = value_1 - value_2
    }
    if(cal === 'x'){
        result = value_1 * value_2
    }
    if(cal === '/'){
        result = value_1 / value_2
        let n = parseFloat(result)
        result =  Math.round(n * 100)/100;   
    }
    if(cal === '%'){
        result = value_1 % value_2 || 0
    }
    rel.innerHTML = result;
}
clean.onclick = () => {
    console.log('cl')
    number_1.value ='';
    number_2.value ='';
    rel.innerHTML = '';
}

