
var fizzBuzz = function(n) {
    let answers = [];
    for(let i=1; i<=n; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            answers[i - 1] = "FizzBuzz";
        }else if(i % 3 == 0){
            answers[i - 1] = "Fizz";
        }
        else if(i % 5 == 0){
            answers[i - 1] = "Buzz";
        }else{
            answers[i - 1] = i.toString();
        }
    }
    return answers;
};

console.log(fizzBuzz(10));