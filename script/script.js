const addNumbers = (firstNumber, secondNumber) => {
    //Code for adding multiple numbers

    /*
  let sum = 0;
    for (number in args) sum += args[number];
    return sum;
    */

    return firstNumber + secondNumber;
};

const substractNumbers = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

const multiplyNumbers = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const divideNumbers = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};

const operate = (operator, firstNumber, secondNumber) => {
    if (operator === "+") return addNumbers(firstNumber, secondNumber);
    if (operator === "-") return substractNumbers(firstNumber, secondNumber);
    if (operator === "*") return multiplyNumbers(firstNumber, secondNumber);
    if (operator === "/") return divideNumbers(firstNumber, secondNumber);
};
