
function processArray(arr) {
    return arr.map(number =>{
        if (number % 2 === 0 ){
            return number * number;
        }else{
            return number * 3;
        }
    })
}

function formatArrayStrings(stringsArray, arr){
    if(stringsArray.length !== arr.length){
        throw new Error;
    }
    return stringsArray.map((str, index) => {
        const number = arr[index];
        if (number % 2 === 0) {
            return str.toUpperCase();
        }else{
            return str.toLowerCase();
        }
    });
}