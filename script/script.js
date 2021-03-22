const display = document.querySelector(".display");
let displayValue = "0";

let firstNumber = "";
let secondNumber = "";
let operator = NaN;

//Add operate function to the equal button
document.getElementById("equal").addEventListener("click", () => {
    display.textContent = operate(operator, firstNumber, secondNumber);
    if (!isNaN(display.textContent)) {
        firstNumber = display.textContent;
        secondNumber = "";
        operator = NaN;
    }
});

//Assign function to every button
const buttons = document.querySelectorAll(".btn");
[...buttons].map((button) => {
    //Checks for button type
    if (button.classList[0] === "operator" && button.textContent !== "=") {
        return button.addEventListener("click", () => {
            operator = button.textContent;
            console.log(operator);
            display.textContent = display.textContent.concat(
                button.textContent
            );
        });
    }
    if (button.textContent === "C.E") {
        return button.addEventListener("click", () => {
            clearNumbers();
        });
    }
    return button.addEventListener("click", () => {
        if (operator) {
            secondNumber = secondNumber.concat(button.textContent);
            console.log(secondNumber);
            display.textContent = display.textContent.concat(
                button.textContent
            );
        } else {
            if (display.textContent === "0") display.textContent = "";
            firstNumber = firstNumber.concat(button.textContent);
            console.log(firstNumber);
            display.textContent = display.textContent.concat(
                button.textContent
            );
        }
    });
});

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
const clearNumbers = () => {
    firstNumber = "";
    secondNumber = "";
    operator = NaN;
    display.textContent = "0";
};
const operate = (operator, firstNumber, secondNumber) => {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if (isNaN(secondNumber)) return NaN;
    if (operator === "+") return addNumbers(firstNumber, secondNumber);
    if (operator === "-") return substractNumbers(firstNumber, secondNumber);
    if (operator === "*") return multiplyNumbers(firstNumber, secondNumber);
    if (operator === "/") return divideNumbers(firstNumber, secondNumber);
};
