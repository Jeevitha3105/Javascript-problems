//Leetcode - 2726. Calculator with Method Chaining

class Calculator {

    constructor(value) {
        this.result = value;
    }

    add(value){
        this.result += value;
        return this;
    }
    
    subtract(value){
        this.result -= value;
        return this;
    }
    
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.result /= value;
        return this;
    }
    
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}


const obj1 = new Calculator(0); // Initialize with an initial value, for example 0
console.log(obj1.add(1).add(2).getResult()); // Output: 3
