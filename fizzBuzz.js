const output = fizzBuzz()
console.log(output);
function fizzBuzz(input){
    if(input % 3 === 0 && input % 5 === 0) return 'FizzBuzz'
    else if(input % 5 === 0) return "Buzz"
    else if(input % 3 === 0) return 'Fizz'
    else return 'Not a number'


}