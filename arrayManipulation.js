
function processArray(arr) {
    return arr.map(number =>{
        if (number % 2 === 0 ){
            return number * number;
        }else{
            return number * 3;
        }
    })
}