//Entrada de dados
const counterOut = document.querySelector('.counter-dome');
const btnAdd = document.querySelector('#btn-add');
const btnDecrease = document.querySelector('#btn-decrease');



function addUnit() {

    let currentValue = Number(counterOut.textContent) + 1;
    counterOut.textContent = currentValue;

}


function decreaseUnit() {

    let currentValue = 0;

    if (Number(counterOut.textContent) <= 0) {

        currentValue = 0;

    } else {

        currentValue = Number(counterOut.textContent) - 1;
        counterOut.textContent = currentValue;

    }

}



btnAdd.addEventListener('click', addUnit);

btnDecrease.addEventListener('click', decreaseUnit)















