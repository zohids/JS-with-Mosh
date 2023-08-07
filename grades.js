const marks = [80, 80, 50]

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0
    let divider = marks.length
    
    for(let i = 0; i < marks.length; i++){
        sum = sum + marks[i]
        
    }
    let average = sum / marks.length
    
    if(average >= 90){
        return 'Your grade is A'
    }else if(average >= 80 && average < 90){
        return 'Your grade is B'
    }else if(average >= 70 && average < 80){
        return 'Your grade is C'
    }else if(average >= 60 && average < 69){
        return 'Your grade is D'
    }else{
        return 'Your grade is F'
    }    
}