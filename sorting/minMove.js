//Leetcode - 2037. Minimum Number of Moves to Seat Everyone

var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a - b);
    students.sort((a,b) => a - b);
   
    let totalMoves = 0;

    for(let i=0; i<seats.length; i++){
        if(seats[i] === students[i]){
            totalMoves += 0;
        }else{
            totalMoves += Math.abs(seats[i] - students[i]);
        }
    }

    return totalMoves;
};

let seats = [2,2,6,6], students = [1,3,2,6]
console.log(minMovesToSeat(seats, students));