let array = [3, 5, true, null, 0, null, NaN]

console.log(countTruthy(array))

function countTruthy(array){
    let sum = 0;
    for(let i = 0; i <= array.length; i++){
        if(array[i]) sum += 1
        
    }
    return sum
}