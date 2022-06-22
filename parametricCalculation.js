
function calc(num1, num2, operator) {

    let operation = 0;
    
    switch(operator){
        case '+': operation = num1 + num2; break;
        case '-': operation = num1 - num2; break;
        case '*': operation = num1 * num2; break;
        case '/': operation = num1 / num2; break;
        default: console.log('operator daxil etmədiniz!');
    }

    return operation;
}

console.log(calc(4, 6, '+'));  // 10