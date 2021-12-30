


function compararNumber(a, b) {

    let validator = '';
    let total = a + b;

    if(a === b) {
        validator = `Os ${a} e ${b} são iguais. `
    } else {
        validator = `Os ${a} e ${b} NÃO são iguais. `
    }

    if(total > 10 && total < 20) {
        validator += `A soma é maior que 10 e menor que 20.`
    } else {
        validator += `A soma é menor que 10 ou maior que 20.`
    }

    return validator;

}



console.log(compararNumber(8, 8));