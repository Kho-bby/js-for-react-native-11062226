//** Task 1 */
function processArray(numbers) {
    return numbers.map(number =>{
        if (numbers % 2 === 0 ){
            return number * number;
        }else{
            return number * 3;
        }
    })
}


//** Task 2*/
function formatArrayStrings(stringsArray, numbersArray){
    if(stringsArray.length !== numbersArray.length){
        throw new Error;
    }
    return stringsArray.map((str, index) => {
        const number = numbersArray[index];
        if (number % 2 === 0) {
            return str.toUpperCase();
        }else{
            return str.toLowerCase();
        }
    });
}