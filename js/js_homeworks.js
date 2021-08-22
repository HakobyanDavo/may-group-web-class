// calculator

function calculator(num1, num2, operator) {
    let result;
    switch(operator) {
        case "+":
            result = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case "-":
            result = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case "*":
            result = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case "/":
            result = `${num1} / ${num2} = ${num1 / num2}`;
            break;
        default:
            result = "num1 and num2 must be number, operator must be +, -, *, /";
    }
    return result;
}

// even or odd

function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

// multiplication table

function multiplicationTable(num) {
    for(let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} * ${i} = ${result}`);
    }
}

// implementing array.prototype.map function

Array.prototype.newMap = function(callback){
    let element,index;
    let newArr = this;
    for(let i = 0; i < newArr.length; i++){
        element = newArr[i];
        index = i;
        callback(element ** 2,index,newArr);
    }
}

arr.newMap(function(x, y, z) {
    console.log(x, y, z);
})