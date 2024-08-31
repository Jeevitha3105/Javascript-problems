// How do you swap two numbers without using a third variable?

function swap(num1, num2){
    console.log(`Before Swapping : num1 is ${num1} num2 is ${num2}`)
    num2 = num2 + num1;
    num1 = num2 - num1;
    num2 = num2 - num1;

    console.log(`After Swapping : num1 is ${num1} num2 is ${num2}`)
}

swap(1,2);
