/**
 * Substituir todos os numeros pares por zero. E caso o array esteja vazio retornar um valor
 * [-1]
 */

let arrayTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function replacePairNumber(list) {

    try {

        if(list === undefined || list === null) {

            throw new Error('Entrada de dado invalido.');

        } else if (list.length > 0) {

            return list.map((element) => {
    
                if (element % 2 === 0) {
    
                    return 0
    
                } else {
    
                    return element;
                }
            });
        } else {
    
            return -1;
        }
        
    } catch (error) {
        
        throw error;
    }

}




console.log(replacePairNumber(arrayTest));











