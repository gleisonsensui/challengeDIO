
let stringBase = 2000


function palhydromeVefiry(string) {



    try {

        let validator = validatorDataEntry(string)
        .toLowerCase()
        .split('')
        .join()
        .replaceAll(',', '')
        .replaceAll(' ', '');

let palhydromeDone = validatorDataEntry(string)
        .toLowerCase()
        .split('')
        .reverse()
        .join('')
        .replaceAll(',', '')
        .replaceAll(' ', '');

        return  palhydromeDone === validator;

    } catch (erro) {
        throw erro
    }



}

function validatorDataEntry(data) {

    if(typeof data !== 'string') {
        throw new Error('Tipo de dado invalido');
    } else {
        return data;
    }

}


console.log(palhydromeVefiry(stringBase));





