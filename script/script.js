//Operate functions
const addNumbers = (firstNumber, secondNumber) => {
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
    firstNumber = firstNumber;
    secondNumber = secondNumber;
    if (isNaN(secondNumber)) return NaN;
    if (operator === "+") return addNumbers(firstNumber, secondNumber);
    if (operator === "-") return substractNumbers(firstNumber, secondNumber);
    if (operator === "*") return multiplyNumbers(firstNumber, secondNumber);
    if (operator === "/") return divideNumbers(firstNumber, secondNumber);
};
