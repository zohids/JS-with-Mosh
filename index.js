let person = {
    name: "Zokhidjon",
    age: 28
}

//Dot Notation which is used to call a key-value pair from an object by "Dot"
person.name

//Bracket Notation which is used to call a key-value pair from an object by "Brackets"
person['age']

let a = "red"
let b = "blue"
a = b
b = "red"

console.log(a)
console.log(b)

let hour = 5;
if (hour >= 6 && hour < 12){
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18){
    console.log('Good afternoon!');
} else{
    console.log("Good evening!");
}