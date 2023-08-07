// for(let i = 1; i <= 10000; i++){
//     console.log(Math.floor(Math.random() * 999) + 1)
// }
let randomArr = []
// function randomizer(limit, maxNum){
//     for (let i = 1; i <= limit; i++) {
//         let num = Math.floor(Math.random() * maxNum) + 1
//         randomArr.push(num)
        
//     }
// }
// randomizer(10000, 999)


let randomizer = (limit, maxNum) => {
    for (let i = 1; i <= limit; i++) {
        let num = Math.floor(Math.random() * maxNum) + 1;
        randomArr.push(num)
        
    }
}

randomizer(10000, 999)
randomArr.sort(function(a, b){
    return a - b
})
console.log(randomArr)
