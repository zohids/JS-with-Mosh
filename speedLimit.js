

// function checkSpeed(speed) {
//     if(speed <= 74) return "Ok"
//     else if(speed > 70){
//         let a = speed - 70;
//         let division = a / 5;
//         let points = Math.floor(division)
        
//         if(points >= 12) return "License suspended"
//         else return points
//     }
// }

// console.log(checkSpeed(125))

checkSpeed(74)

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit + kmPerPoint){
        console.log("Ok");
        return;
    }

    const points = (Math.floor((speed - speedLimit) / kmPerPoint))
    if (points >= 12) {
        console.log("License suspened")
    }else console.log("Points:", points)
}

